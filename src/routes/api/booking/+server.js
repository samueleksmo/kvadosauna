import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// Booking requests are emailed to the owner through Resend (https://resend.com).
// Required env vars (Cloudflare dashboard → Workers & Pages → kvadosauna → Settings →
// Variables and Secrets, type "Secret"; locally in .env):
//   RESEND_API_KEY      – API key from Resend
//   BOOKING_TO_EMAIL    – where requests are sent (your inbox)
// Optional:
//   BOOKING_FROM_EMAIL  – sender on a domain verified in Resend, e.g. "Ekudden Bastu <bokning@kvadosauna.se>".
//                         When set, the guest also gets a confirmation email.
//                         Without it, Resend's test sender is used and only you receive mail.

const MIN_FILL_MS = 3000; // faster than this is almost certainly a bot

/** @param {unknown} v @param {number} max */
const str = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

/** @param {string} s */
const esc = (s) =>
	s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);

const confirmText = {
	sv: { subject: 'Vi har tagit emot din bokningsförfrågan', body: 'Tack för din förfrågan! Vi återkommer så snart vi kan för att bekräfta bokningen.' },
	en: { subject: 'We received your booking request', body: 'Thank you for your request! We will get back to you as soon as we can to confirm your booking.' },
	de: { subject: 'Wir haben Ihre Buchungsanfrage erhalten', body: 'Vielen Dank für Ihre Anfrage! Wir melden uns so bald wie möglich zur Bestätigung.' },
	da: { subject: 'Vi har modtaget din bookingforespørgsel', body: 'Tak for din forespørgsel! Vi vender tilbage hurtigst muligt for at bekræfte bookingen.' },
	nl: { subject: 'We hebben uw boekingsverzoek ontvangen', body: 'Bedankt voor uw verzoek! Wij nemen zo snel mogelijk contact op ter bevestiging.' }
};

/** @param {Record<string, unknown>} payload */
async function sendEmail(payload) {
	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
		body: JSON.stringify(payload)
	});
	if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	let body;
	try {
		body = await request.json();
	} catch {
		return json({ ok: false }, { status: 400 });
	}

	// Spam traps: silently accept so bots don't retry
	if (str(body.website, 200) || Number(body.elapsed) < MIN_FILL_MS) return json({ ok: true });

	const data = {
		name: str(body.name, 100),
		email: str(body.email, 200),
		phone: str(body.phone, 40),
		date: str(body.date, 10),
		arrival: str(body.arrival, 5),
		guests: Number.parseInt(String(body.guests), 10),
		message: str(body.message, 2000),
		locale: /** @type {keyof typeof confirmText} */ (str(body.locale, 2) in confirmText ? str(body.locale, 2) : 'en')
	};

	const valid =
		data.name &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
		/^\d{4}-\d{2}-\d{2}$/.test(data.date) &&
		data.date >= new Date().toISOString().slice(0, 10) &&
		/^\d{2}:\d{2}$/.test(data.arrival) &&
		data.guests >= 1 &&
		data.guests <= 20;
	if (!valid) return json({ ok: false }, { status: 400 });

	if (!env.RESEND_API_KEY || !env.BOOKING_TO_EMAIL) {
		console.error('Booking email not configured: set RESEND_API_KEY and BOOKING_TO_EMAIL');
		return json({ ok: false }, { status: 500 });
	}

	const from = env.BOOKING_FROM_EMAIL || 'Ekudden Bastu <onboarding@resend.dev>';
	const rows = [
		['Namn', data.name],
		['E-post', data.email],
		['Telefon', data.phone || '–'],
		['Datum', data.date],
		['Ankomsttid', data.arrival],
		['Antal gäster', String(data.guests)],
		['Språk', data.locale.toUpperCase()],
		['Meddelande', data.message || '–']
	];

	try {
		await sendEmail({
			from,
			to: env.BOOKING_TO_EMAIL,
			reply_to: data.email,
			subject: `Bokningsförfrågan ${data.date} – ${data.name} (${data.guests} pers)`,
			text: rows.map(([k, v]) => `${k}: ${v}`).join('\n') + '\n\nSvara på detta mejl för att svara gästen.',
			html:
				'<h2>Ny bokningsförfrågan</h2><table cellpadding="6">' +
				rows.map(([k, v]) => `<tr><th align="left">${k}</th><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`).join('') +
				'</table><p>Svara på detta mejl för att svara gästen.</p>'
		});

		if (env.BOOKING_FROM_EMAIL) {
			const c = confirmText[data.locale];
			await sendEmail({
				from,
				to: data.email,
				reply_to: env.BOOKING_TO_EMAIL,
				subject: c.subject,
				text: `${c.body}\n\n${data.date} · ${data.arrival} · ${data.guests}\n\nEkudden Bastu · Kvädö Sauna\nhttps://kvadosauna.se`
			}).catch((err) => console.error('Guest confirmation failed', err));
		}
	} catch (err) {
		console.error(err);
		return json({ ok: false }, { status: 502 });
	}

	return json({ ok: true });
}
