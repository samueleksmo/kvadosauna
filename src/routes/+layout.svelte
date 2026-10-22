<script>
	import Header from '$lib/header/Header.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { initLocale, locale } from '$lib/i18n/locale';
	import { translations } from '$lib/i18n/translations';
	import { photoCredits } from '$lib/content/credits';
	import { localePaths, pillarPath, parkingAddress, coords, mapUrl, pricing } from '$lib/content/site';
	import '../app.css';

	onMount(() => {
		initLocale();
	});

	/** @type {import('$lib/i18n/translations.js').Locale} */
	let footLocale;
	$: footLocale = $page.data.locale ?? $locale;
	$: ft = translations[footLocale];
	$: home = localePaths[footLocale];

	// keep <html lang> correct during client-side navigation (the server sets it on first load)
	$: if (browser) {
		const m = $page.url.pathname.match(/^\/(en|de|da|nl)(\/|$)/);
		document.documentElement.lang = m ? m[1] : 'sv';
	}
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="foot">
		<a href={home} class="foot-brand">Ekudden</a>
		<div>
			<h2>{ft.location.title}</h2>
			<p>{parkingAddress}<br />Kvädöfjärden, Östergötland</p>
			<p><a href={mapUrl} target="_blank" rel="noopener noreferrer">{coords.lat.toFixed(5)}, {coords.lng.toFixed(3)}</a></p>
		</div>
		<div>
			<h2>{ft.nav.book}</h2>
			<p>{new Intl.NumberFormat(footLocale).format(pricing.sek)} SEK · {pricing.hours} h<br />{ft.pricing.label}</p>
			<p><a href="{home}#book">{ft.book.ctaLabel} →</a></p>
		</div>
		<div>
			<h2>{ft.nav.guides}</h2>
			<p>
				<a href={pillarPath}>{ft.guides.pillar}</a><br />
				<a href="/vanliga-fragor">{ft.guides.faq}</a>
			</p>
		</div>
	</div>
	<div class="copy">
		<p>&copy; {new Date().getFullYear()} Ekudden Bastu · Kvädö Sauna</p>
		<p class="credits">
			Unsplash:
			{#each photoCredits as c, i}<a href={c.url} target="_blank" rel="noopener noreferrer">{c.name}</a
				>{i < photoCredits.length - 1 ? ', ' : ''}{/each}
		</p>
	</div>
</footer>

<style>
	main {
		flex: 1;
		width: 100%;
	}

	footer {
		background: var(--moss);
		color: rgba(255, 255, 255, 0.82);
		padding: clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem) 2rem;
		font-size: 0.82rem;
	}

	.foot {
		max-width: var(--max-width);
		margin: 0 auto;
		display: grid;
		gap: 2.5rem;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	}

	.foot-brand {
		font-family: var(--font-serif);
		font-size: 3rem;
		font-weight: 300;
		line-height: 1;
		color: var(--paper);
		text-decoration: none;
	}

	footer h2 {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--paper);
		margin: 0 0 1rem;
	}

	footer p {
		color: inherit;
		margin: 0 0 0.75rem;
	}

	footer a {
		color: inherit;
	}

	footer a:hover {
		color: var(--paper);
	}

	.copy {
		max-width: var(--max-width);
		margin: 4rem auto 0;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		font-size: 0.7rem;
		letter-spacing: 0.08em;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.5rem 2rem;
	}

	.copy p {
		margin: 0;
	}

	.credits {
		opacity: 0.7;
	}
</style>
