<script>
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { locale } from '$lib/i18n/locale';
	import { translations } from '$lib/i18n/translations';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { pillarPath, localePaths } from '$lib/content/site';

	/** @type {import('$lib/i18n/translations.js').Locale} */
	let activeLocale;
	// Landing pages pass their language in page data; other pages use the visitor's choice.
	$: activeLocale = $page.data.locale ?? $locale;
	$: t = translations[activeLocale].nav;
	$: home = localePaths[activeLocale];

	let open = false;
	afterNavigate(() => (open = false));

	/** @param {KeyboardEvent} e */
	const onKey = (e) => {
		if (e.key === 'Escape') open = false;
	};

	$: links = [
		{ href: `${home}#about`, label: t.about },
		{ href: `${home}#pricing`, label: t.pricing },
		{ href: `${home}#gallery`, label: t.gallery },
		{ href: `${home}#location`, label: t.location },
		{ href: `${home}#visit-info`, label: t.visitInfo },
		{ href: pillarPath, label: t.guides },
		{ href: '/vanliga-fragor', label: t.faq }
	];
</script>

<svelte:window on:keydown={onKey} />

<header class:open>
	<button
		class="menu-toggle"
		aria-expanded={open}
		aria-controls="site-menu"
		aria-label={t.label}
		on:click={() => (open = !open)}
	>
		<span></span><span></span>
	</button>

	<a href={home} class="brand" aria-label="Ekudden Bastu">
		<span class="brand-name">Ekudden</span>
		<span class="brand-sub">Bastu · Kvädö</span>
	</a>

	<div class="actions">
		<LanguageSwitcher current={activeLocale} />
		<a href="{home}#book" class="book">{t.book}</a>
	</div>
</header>

<div id="site-menu" class="menu" class:open aria-hidden={!open} inert={!open}>
	<nav aria-label={t.label}>
		<ul>
			{#each links as link, i}
				<li style="--i: {i}">
					<a href={link.href} on:click={() => (open = false)}>{link.label}</a>
				</li>
			{/each}
		</ul>
		<a href="{home}#book" class="btn" on:click={() => (open = false)}>{t.book}</a>
	</nav>
</div>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 100;
		height: var(--header-h);
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		padding: 0 clamp(1rem, 3vw, 2.5rem);
		background: rgba(255, 255, 255, 0.94);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--line);
	}

	.menu-toggle {
		justify-self: start;
		width: 44px;
		height: 44px;
		display: grid;
		align-content: center;
		gap: 7px;
		padding: 0 6px;
		border: none;
		background: none;
	}

	.menu-toggle span {
		display: block;
		height: 1px;
		background: var(--ink);
		transition: transform 0.3s;
	}

	.open .menu-toggle span:first-child {
		transform: translateY(4px) rotate(45deg);
	}

	.open .menu-toggle span:last-child {
		transform: translateY(-4px) rotate(-45deg);
	}

	.brand {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		color: var(--ink);
		line-height: 1;
	}

	.brand:hover {
		color: var(--ink);
	}

	.brand-name {
		font-family: var(--font-serif);
		font-size: 1.85rem;
		font-weight: 300;
		letter-spacing: 0.01em;
	}

	.brand-sub {
		margin-top: 0.3rem;
		font-size: 0.6rem;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.actions {
		justify-self: end;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.book {
		padding: 0.55rem 1rem;
		border: 1px solid var(--ink);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--ink);
		transition:
			background 0.25s,
			color 0.25s;
	}

	.book:hover {
		background: var(--ink);
		color: var(--paper);
	}

	/* Full-screen menu */
	.menu {
		position: fixed;
		inset: var(--header-h) 0 0 0;
		z-index: 99;
		background: var(--linen);
		display: flex;
		align-items: center;
		padding: 2rem clamp(1.5rem, 8vw, 8rem);
		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.35s,
			visibility 0.35s;
		overflow-y: auto;
	}

	.menu.open {
		opacity: 1;
		visibility: visible;
	}

	.menu ul {
		list-style: none;
		margin: 0 0 2.5rem;
		padding: 0;
	}

	.menu li {
		opacity: 0;
		transform: translateY(12px);
		transition:
			opacity 0.5s,
			transform 0.5s;
		transition-delay: calc(var(--i) * 40ms);
	}

	.menu.open li {
		opacity: 1;
		transform: none;
	}

	.menu li a {
		font-family: var(--font-serif);
		font-size: clamp(2rem, 5.5vw, 3.6rem);
		font-weight: 300;
		line-height: 1.25;
		text-decoration: none;
		color: var(--ink);
	}

	.menu li a:hover {
		font-style: italic;
		color: var(--ink);
	}

	@media (max-width: 560px) {
		.brand-name {
			font-size: 1.5rem;
		}
		.brand-sub {
			display: none;
		}
		.actions {
			gap: 0.25rem;
		}
		.book {
			padding: 0.45rem 0.7rem;
			font-size: 0.65rem;
		}
	}
</style>
