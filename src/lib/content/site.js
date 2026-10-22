export const siteUrl = 'https://kvadosauna.se';
export const siteName = 'Ekudden Bastu';
export const coords = { lat: 58.06024, lng: 16.808 };
export const parkingAddress = 'Ekuddevägen 10';
export const pillarPath = '/kvadofjarden-privat-bastu-havsbad';

/** Fixed price per booking (whole group), all year. EUR/DKK are rough guides. */
export const pricing = { sek: 2000, hours: 4, eur: 180, dkk: 1330 };

export const mapUrl = `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;
export const parkingMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parkingAddress)}`;

export const privyUrls = {
	sv: 'https://www.naturkartan.se/ostergotlands-lan/ekudden-torrtoa',
	en: 'https://www.naturkartan.se/en/ostergotlands-lan/ekudden-torrtoa',
	de: 'https://www.naturkartan.se/en/ostergotlands-lan/ekudden-torrtoa',
	da: 'https://www.naturkartan.se/en/ostergotlands-lan/ekudden-torrtoa',
	nl: 'https://www.naturkartan.se/en/ostergotlands-lan/ekudden-torrtoa'
};

/** URL path of the landing page for each language. Swedish is the default at `/`.
 * @type {Record<import('$lib/i18n/translations.js').Locale, string>} */
export const localePaths = { sv: '/', en: '/en', de: '/de', da: '/da', nl: '/nl' };
