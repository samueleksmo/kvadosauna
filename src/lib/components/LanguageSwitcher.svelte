<script>
	import { setLocale } from '$lib/i18n/locale';
	import { languageOptions } from '$lib/i18n/translations';
	import { localePaths } from '$lib/content/site';

	/** @type {{ current: import('$lib/i18n/translations.js').Locale }} */
	let { current } = $props();

	const names = { sv: 'Svenska', en: 'English', de: 'Deutsch', da: 'Dansk', nl: 'Nederlands' };

	/** @type {HTMLDetailsElement | undefined} */
	let details = $state();

	/** @param {string} code */
	function choose(code) {
		setLocale(code);
		if (details) details.open = false;
	}
</script>

<details class="lang" bind:this={details}>
	<summary aria-label="Language / Språk">
		{current.toUpperCase()}
		<svg width="9" height="6" viewBox="0 0 9 6" aria-hidden="true"
			><path d="M1 1l3.5 3.5L8 1" fill="none" stroke="currentColor" /></svg
		>
	</summary>
	<ul>
		{#each languageOptions as { code }}
			<li>
				<a
					href={localePaths[code]}
					hreflang={code}
					lang={code}
					aria-current={current === code ? 'true' : undefined}
					onclick={() => choose(code)}
				>
					{names[code]}
				</a>
			</li>
		{/each}
	</ul>
</details>

<style>
	.lang {
		position: relative;
		font-size: 0.72rem;
		letter-spacing: 0.12em;
	}

	summary {
		list-style: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.55rem 0.4rem;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	[open] svg {
		transform: rotate(180deg);
	}

	ul {
		position: absolute;
		right: 0;
		top: calc(100% + 0.5rem);
		min-width: 9.5rem;
		margin: 0;
		padding: 0.5rem 0;
		list-style: none;
		background: var(--paper);
		border: 1px solid var(--line);
	}

	a {
		display: block;
		padding: 0.45rem 1rem;
		text-decoration: none;
		letter-spacing: 0.04em;
		color: var(--ink-soft);
	}

	a:hover,
	a[aria-current] {
		color: var(--ink);
		background: var(--linen);
	}
</style>
