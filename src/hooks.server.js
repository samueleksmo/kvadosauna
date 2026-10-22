/** Sets <html lang> per page so each language version is announced correctly. */
/** @type {import('@sveltejs/kit').Handle} */
export const handle = ({ event, resolve }) => {
	const match = event.url.pathname.match(/^\/(en|de|da|nl)(\/|$)/);
	const lang = match ? match[1] : 'sv';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
