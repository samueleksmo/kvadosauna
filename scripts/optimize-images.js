// Turns the full-size originals in /photos-original into graded, web-sized JPEGs in
// /static/images. Run with `npm run images` after adding or replacing a photo.
//
// Every photo gets the same "look" so phone snapshots read as one consistent set:
// neutralised colour cast, soft matte tone curve with highlight roll-off, muted
// olive greens, a touch of warmth, a gentle vignette and output sharpening.
// Per-photo crops/tweaks live in PHOTOS below.
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'photos-original';
const OUT = 'static/images';
const WIDTHS = [800, 1600, 2400];

/**
 * crop: fractions of the image to keep { left, top, width, height } (0–1)
 * rotate: degrees to straighten
 * exposure: multiplier before the tone curve
 * wb: strength of automatic white balance (0 = off; keep low for photos dominated by one colour)
 * @type {Record<string, { crop?: {left:number,top:number,width:number,height:number}, rotate?: number, exposure?: number, saturation?: number, wb?: number }>}
 */
const PHOTOS = {
	sauna: { crop: { left: 0, top: 0.04, width: 1, height: 0.82 }, exposure: 0.97 },
	view: { crop: { left: 0, top: 0.1, width: 1, height: 0.8 }, exposure: 0.98 },
	inside: { exposure: 0.94, wb: 0 },
	autumn: { crop: { left: 0, top: 0.06, width: 1, height: 0.86 }, wb: 0 },
	coordinates: { crop: { left: 0.08, top: 0.12, width: 0.84, height: 0.76 }, saturation: 0.8, wb: 0 },
	// Unsplash mood photos (credits in src/lib/content/credits.js)
	bay: { wb: 0, saturation: 0.9 },
	whisk: { wb: 0, saturation: 0.9 },
	firewood: { wb: 0.15, crop: { left: 0, top: 0.05, width: 1, height: 0.9 } },
	reflection: { wb: 0 },
	'forest-lake': { wb: 0.15, crop: { left: 0, top: 0.22, width: 1, height: 0.6 } }
};

// Tone curve control points (input → output): matte blacks, gentle S, soft highlights
const CURVE = [
	[0, 0.04],
	[0.18, 0.17],
	[0.5, 0.51],
	[0.82, 0.83],
	[1, 0.955]
];

function buildLut() {
	const lut = new Float32Array(1024);
	for (let i = 0; i < 1024; i++) {
		const x = i / 1023;
		let j = 0;
		while (j < CURVE.length - 2 && x > CURVE[j + 1][0]) j++;
		const [x0, y0] = CURVE[j];
		const [x1, y1] = CURVE[j + 1];
		const t = (x - x0) / (x1 - x0);
		const s = t * t * (3 - 2 * t); // smooth between points
		lut[i] = y0 + (y1 - y0) * (0.5 * t + 0.5 * s);
	}
	return lut;
}
const LUT = buildLut();
const tone = (/** @type {number} */ v) => LUT[Math.max(0, Math.min(1023, Math.round(v * 1023)))];

/**
 * @param {Buffer} data raw RGB
 * @param {number} w
 * @param {number} h
 * @param {{ exposure?: number, saturation?: number, wb?: number }} opts
 */
function grade(data, w, h, { exposure = 1, saturation = 0.86, wb = 0.3 } = {}) {
	// partial gray-world white balance
	let sr = 0, sg = 0, sb = 0;
	for (let i = 0; i < data.length; i += 3) {
		sr += data[i];
		sg += data[i + 1];
		sb += data[i + 2];
	}
	const avg = (sr + sg + sb) / 3;
	const k = wb;
	const mr = 1 + k * (avg / sr - 1);
	const mg = 1 + k * (avg / sg - 1);
	const mb = 1 + k * (avg / sb - 1);

	const cx = w / 2, cy = h / 2;
	const maxD = cx * cx + cy * cy;
	for (let y = 0, i = 0; y < h; y++) {
		for (let x = 0; x < w; x++, i += 3) {
			let r = (data[i] / 255) * mr * exposure;
			let g = (data[i + 1] / 255) * mg * exposure;
			let b = (data[i + 2] / 255) * mb * exposure;

			// tone curve on each channel
			r = tone(r);
			g = tone(g);
			b = tone(b);

			// saturation, extra-muted greens/yellows shifted toward olive
			const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
			let s = saturation;
			if (g > r && g > b) s *= 0.82;
			r = L + (r - L) * s;
			g = L + (g - L) * s;
			b = L + (b - L) * s;

			// warmth
			r *= 1.025;
			b *= 0.965;

			// vignette
			const dx = x - cx, dy = y - cy;
			const v = 1 - 0.14 * ((dx * dx + dy * dy) / maxD) ** 1.3;

			data[i] = Math.max(0, Math.min(255, r * v * 255));
			data[i + 1] = Math.max(0, Math.min(255, g * v * 255));
			data[i + 2] = Math.max(0, Math.min(255, b * v * 255));
		}
	}
	return data;
}

await mkdir(OUT, { recursive: true });

for (const file of await readdir(SRC)) {
	if (!/\.(png|jpe?g|heic|webp|tiff?)$/i.test(file)) continue;
	const name = path.parse(file).name;
	const cfg = PHOTOS[name] ?? {};

	let img = sharp(path.join(SRC, file)).rotate(); // respect EXIF orientation
	if (cfg.rotate) img = sharp(await img.rotate(cfg.rotate, { background: '#000' }).toBuffer());
	const meta = await img.metadata();
	const W0 = meta.autoOrient?.width ?? meta.width ?? 0;
	const H0 = meta.autoOrient?.height ?? meta.height ?? 0;
	if (cfg.crop) {
		const c = cfg.crop;
		img = img.extract({
			left: Math.round(c.left * W0),
			top: Math.round(c.top * H0),
			width: Math.round(c.width * W0),
			height: Math.round(c.height * H0)
		});
	}

	const { data, info } = await img
		.resize({ width: Math.max(...WIDTHS), withoutEnlargement: true })
		.removeAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });
	grade(data, info.width, info.height, cfg);
	const graded = sharp(data, { raw: { width: info.width, height: info.height, channels: 3 } });

	for (const width of WIDTHS) {
		await graded
			.clone()
			.resize({ width, withoutEnlargement: true })
			.sharpen({ sigma: width <= 800 ? 0.6 : 0.8 })
			.jpeg({ quality: 74, mozjpeg: true })
			.toFile(`${OUT}/${name}-${width}.jpg`);
	}
	console.log('✓', name, `${info.width}×${info.height}`);
}
