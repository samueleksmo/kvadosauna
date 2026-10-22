import { writable } from 'svelte/store';
import { browser } from '$app/environment';

/** @type {import('./translations.js').Locale} */
export const defaultLocale = 'sv';
/** @typedef {import('./translations.js').Locale} Locale */

/** @type {Locale[]} */
export const locales = ['sv', 'en', 'de', 'da', 'nl'];

const storageKey = 'ekuddenbastu-locale';

function readStoredLocale() {
	if (!browser) return defaultLocale;
	/** @type {any} */
	let stored = null;
	try {
		stored = localStorage.getItem(storageKey);
	} catch {
		// storage unavailable
	}
	return locales.includes(stored) ? /** @type {Locale} */ (stored) : defaultLocale;
}

/** @type {import('svelte/store').Writable<Locale>} */
export const locale = writable(defaultLocale);

export function initLocale() {
	const code = readStoredLocale();
	locale.set(code);
}

/** @param {string} code */
export function setLocale(code) {
	if (!locales.includes(/** @type {Locale} */ (code))) return;
	locale.set(/** @type {Locale} */ (code));
	if (browser) {
		try {
			localStorage.setItem(storageKey, code);
		} catch {
			// storage unavailable (private mode etc.) – ignore
		}
	}
}
