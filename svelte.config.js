import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Deployed to Cloudflare Workers – see wrangler.jsonc
		adapter: adapter(),
		prerender: {
			// sitemap.xml and the locale pages are discovered through these entries
			entries: ['*', '/sitemap.xml']
		}
	}
};

export default config;
