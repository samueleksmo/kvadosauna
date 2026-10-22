import { siteUrl, localePaths, pillarPath } from '$lib/content/site';
import { clusterGuides } from '$lib/content/guides/index.js';

export const prerender = true;

export function GET() {
	const alternates = Object.entries(localePaths)
		.map(([code, path]) => `<xhtml:link rel="alternate" hreflang="${code}" href="${siteUrl}${path}"/>`)
		.concat(`<xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/"/>`)
		.join('');

	const landing = Object.values(localePaths).map(
		(path) => `<url><loc>${siteUrl}${path}</loc>${alternates}<priority>1.0</priority></url>`
	);
	const pages = [pillarPath, '/vanliga-fragor', ...clusterGuides.map((g) => g.path)].map(
		(path) => `<url><loc>${siteUrl}${path}</loc><priority>0.7</priority></url>`
	);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...landing, ...pages].join('\n')}
</urlset>`;

	return new Response(xml, { headers: { 'content-type': 'application/xml' } });
}
