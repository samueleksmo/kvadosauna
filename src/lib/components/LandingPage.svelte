<script>
	import { locale } from '$lib/i18n/locale';
	import { translations } from '$lib/i18n/translations';
	import Photo from '$lib/components/Photo.svelte';
	import BookingForm from '$lib/components/BookingForm.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { reveal } from '$lib/reveal';
	import {
		coords,
		parkingAddress,
		pricing,
		mapUrl,
		parkingMapUrl,
		privyUrls,
		pillarPath
	} from '$lib/content/site';

	/** @type {import('$lib/i18n/translations.js').Locale | null} */
	export let forcedLocale = null;

	/** @type {import('$lib/i18n/translations.js').Locale} */
	let activeLocale;
	$: activeLocale = forcedLocale ?? $locale;
	$: t = translations[activeLocale];
	$: privyUrl = privyUrls[activeLocale] ?? privyUrls.en;

	$: fmt = (/** @type {number} */ n) => new Intl.NumberFormat(activeLocale).format(n);

	$: infoItems = [
		{ title: t.visitInfo.heatingTitle, text: t.visitInfo.heating },
		{ title: t.visitInfo.rulesTitle, text: t.visitInfo.rules },
		{ title: t.visitInfo.waterTitle, text: t.visitInfo.water },
		{ title: t.visitInfo.trashTitle, text: t.visitInfo.trash },
		{ title: t.visitInfo.privyTitle, text: t.visitInfo.privy, link: privyUrl, linkText: t.visitInfo.privyLink }
	];
</script>

<SeoHead locale={activeLocale} title={t.meta.title} description={t.meta.description} />

<!-- Intro -->
<section class="intro">
	<p class="label">{t.hero.eyebrow}</p>
	<h1>{t.hero.title}</h1>
	<p class="intro-lead">{t.hero.lead}</p>
	<a href="#book" class="btn">{t.hero.cta}</a>
</section>

<figure class="bleed hero-photo">
	<Photo name="view" alt={t.hero.imageAlt} sizes="100vw" eager />
</figure>

<!-- About -->
<section id="about" class="section">
	<div class="split" use:reveal>
		<div class="split-text">
			<p class="label">{t.about.tag}</p>
			<h2>{t.about.title}</h2>
			<p>{t.about.p1}</p>
			<p><em class="serif-em">{t.about.seaPlungeBold}</em> {t.about.seaPlunge}</p>
			<ul class="ruled">
				{#each t.about.features as feature}
					<li>{feature}</li>
				{/each}
			</ul>
		</div>
		<figure class="split-photo tall">
			<Photo name="inside" alt={t.gallery.alts.inside} sizes="(min-width: 900px) 45vw, 100vw" />
			<figcaption>{t.gallery.captions.inside}</figcaption>
		</figure>
	</div>
</section>

<figure class="bleed band">
	<Photo name="bay" alt={t.gallery.alts.bay} sizes="100vw" />
</figure>

<!-- Pricing -->
<section id="pricing" class="section tinted">
	<div class="narrow center" use:reveal>
		<h2 class="label rule">{t.pricing.title}</h2>
		<p class="muted-intro">{t.pricing.intro}</p>
	</div>

	<div class="prices" use:reveal>
		<article class="price">
			<p class="label">{t.pricing.label}</p>
			<p class="price-amount">{fmt(pricing.sek)}<span>&nbsp;SEK</span></p>
			<p class="price-period">{t.pricing.duration}</p>
			<p class="price-equiv">≈ €{fmt(pricing.eur)} · {fmt(pricing.dkk)} DKK</p>
		</article>
	</div>

	<div class="narrow center" use:reveal>
		<p><strong>{t.pricing.includedBold}</strong>{t.pricing.included}</p>
		<p class="fine">{t.pricing.footnote}</p>
		<a href="#book" class="btn">{t.pricing.cta}</a>
	</div>
</section>

<!-- Mood triptych -->
<section class="mood">
	<div class="triptych" use:reveal>
		<figure class="t-firewood">
			<Photo name="firewood" alt={t.gallery.alts.firewood} sizes="(min-width: 900px) 26vw, 50vw" />
		</figure>
		<figure class="t-whisk">
			<Photo name="whisk" alt={t.gallery.alts.whisk} sizes="(min-width: 900px) 44vw, 100vw" />
		</figure>
		<figure class="t-reflection">
			<Photo name="reflection" alt={t.gallery.alts.reflection} sizes="(min-width: 900px) 26vw, 50vw" />
		</figure>
	</div>
</section>

<!-- Gallery -->
<section id="gallery" class="section">
	<div class="wide">
		<h2 class="label rule" use:reveal>{t.gallery.title}</h2>
		<div class="gallery" use:reveal>
			<figure class="g-a">
				<Photo name="sauna" alt={t.gallery.alts.sauna} sizes="(min-width: 900px) 58vw, 100vw" />
				<figcaption>{t.gallery.captions.sauna}</figcaption>
			</figure>
			<figure class="g-b">
				<Photo name="inside" alt={t.gallery.alts.inside} sizes="(min-width: 900px) 38vw, 100vw" />
				<figcaption>{t.gallery.captions.inside}</figcaption>
			</figure>
			<figure class="g-c">
				<Photo name="coordinates" alt={t.gallery.alts.coords} sizes="(min-width: 900px) 38vw, 100vw" />
				<figcaption>{t.gallery.captions.coords}</figcaption>
			</figure>
			<figure class="g-d">
				<Photo name="view" alt={t.gallery.alts.view} sizes="(min-width: 900px) 58vw, 100vw" />
				<figcaption>{t.gallery.captions.view}</figcaption>
			</figure>
			<figure class="g-e">
				<Photo name="autumn" alt={t.gallery.alts.autumn} sizes="(min-width: 900px) 1200px, 100vw" />
				<figcaption>{t.gallery.captions.autumn}</figcaption>
			</figure>
		</div>
	</div>
</section>

<!-- Location -->
<section id="location" class="section tinted">
	<div class="split reverse" use:reveal>
		<div class="split-text">
			<p class="label">{t.location.parkingTitle} · {parkingAddress}</p>
			<h2>{t.location.title}</h2>
			<p>
				{t.location.coords}
				<span class="coords">{coords.lat.toFixed(6)}, {coords.lng.toFixed(3)}</span>
			</p>
			<p>{t.location.directions}</p>
			<p>{t.location.parking}</p>
			<div class="links">
				<a href={mapUrl} target="_blank" rel="noopener noreferrer">{t.location.mapLink}</a>
				<a href={parkingMapUrl} target="_blank" rel="noopener noreferrer">{parkingAddress} →</a>
			</div>
		</div>
		<figure class="split-photo">
			<Photo name="sauna" alt={t.gallery.alts.sauna} sizes="(min-width: 900px) 45vw, 100vw" />
		</figure>
	</div>
</section>

<!-- Practical info -->
<section id="visit-info" class="section">
	<div class="wide">
		<div class="info-head" use:reveal>
			<p class="label">{t.visitInfo.intro}</p>
			<h2>{t.visitInfo.title}</h2>
		</div>
		<div class="info-grid" use:reveal>
			{#each infoItems as item}
				<article>
					<h3>{item.title}</h3>
					<p>
						{item.text}
						{#if item.link}<a href={item.link} target="_blank" rel="noopener noreferrer"
								>{item.linkText}</a
							>{/if}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Guides -->
<section id="guides" class="section guides">
	<div class="narrow center" use:reveal>
		<h2 class="label rule">{t.guides.title}</h2>
		<p>{t.guides.intro}</p>
		<a href={pillarPath} class="guide-link">{t.guides.pillar}</a>
		<a href="/vanliga-fragor" class="small-link">{t.guides.faq} →</a>
	</div>
</section>

<!-- Booking -->
<section id="book" class="section book">
	<div class="book-grid">
		<div class="book-text" use:reveal>
			<p class="label">{t.nav.book}</p>
			<h2>{t.book.title}</h2>
			<p>{t.book.p}</p>
			<p class="fine">{t.book.hint}</p>
		</div>
		<div class="book-form">
			<BookingForm locale={activeLocale} submitLabel={t.book.ctaLabel} />
		</div>
	</div>
</section>

<style>
	/* ---------- layout primitives ---------- */
	.section {
		padding: clamp(5rem, 11vw, 9.5rem) clamp(1.25rem, 5vw, 4rem);
	}

	.tinted {
		background: var(--linen);
	}

	.narrow {
		max-width: 40rem;
		margin: 0 auto;
	}

	.wide {
		max-width: var(--max-width);
		margin: 0 auto;
	}

	.center {
		text-align: center;
	}

	.bleed {
		margin: 0;
		width: 100%;
		overflow: hidden;
	}

	.bleed :global(img) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* label with hairline, Vyn style */
	.label.rule {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		margin: 0 0 3rem;
	}

	.label.rule::before,
	.label.rule::after {
		content: '';
		flex: 1;
		height: 1px;
		background: var(--line);
	}

	.fine {
		font-size: 0.8rem;
		color: var(--muted);
	}

	.serif-em {
		font-family: var(--font-serif);
		font-style: italic;
		font-size: 1.35em;
		line-height: 1.2;
		color: var(--ink);
	}

	/* ---------- intro / hero ---------- */
	.intro {
		text-align: center;
		padding: clamp(4rem, 10vw, 8rem) 1.25rem clamp(3rem, 6vw, 5rem);
		max-width: 52rem;
		margin: 0 auto;
	}

	.intro h1 {
		margin: 0 0 1.75rem;
	}

	.intro-lead {
		max-width: 34rem;
		margin: 0 auto 2.5rem;
	}

	.hero-photo {
		height: clamp(22rem, 78vh, 54rem);
	}

	.band {
		height: clamp(16rem, 55vh, 38rem);
	}

	/* ---------- split (image + text) ---------- */
	.split {
		max-width: var(--max-width);
		margin: 0 auto;
		display: grid;
		gap: clamp(2.5rem, 6vw, 6rem);
		align-items: center;
	}

	@media (min-width: 900px) {
		.split {
			grid-template-columns: 1fr 1fr;
		}
		.split.reverse .split-photo {
			order: -1;
		}
	}

	.split-text {
		max-width: 30rem;
	}

	.split-photo {
		margin: 0;
	}

	.split-photo :global(img) {
		display: block;
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	.split-photo.tall :global(img) {
		aspect-ratio: 4 / 5;
	}

	figcaption {
		margin-top: 0.75rem;
		font-size: 0.72rem;
		letter-spacing: 0.06em;
		color: var(--muted);
	}

	.ruled {
		list-style: none;
		padding: 0;
		margin: 2rem 0 0;
		border-top: 1px solid var(--line);
	}

	.ruled li {
		padding: 0.85rem 0;
		border-bottom: 1px solid var(--line);
		font-size: 0.85rem;
		color: var(--ink);
	}

	/* ---------- pricing ---------- */
	.muted-intro {
		font-size: 0.85rem;
	}

	.prices {
		max-width: 34rem;
		margin: 4rem auto;
		display: grid;
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}


	.price {
		text-align: center;
		padding: 3rem 1.5rem;
	}


	.price .label {
		margin-bottom: 1rem;
	}

	.price-amount {
		font-family: var(--font-serif);
		font-weight: 300;
		font-size: clamp(3rem, 7vw, 4.5rem);
		line-height: 1;
		color: var(--ink);
		margin: 0 0 1rem;
	}

	.price-amount span {
		font-size: 0.35em;
		letter-spacing: 0.1em;
	}

	.price-period {
		margin: 0;
		color: var(--ink);
	}

	.price-equiv {
		margin: 0.25rem 0 0;
		font-size: 0.75rem;
		color: var(--muted);
	}

	/* ---------- gallery ---------- */
	.gallery {
		display: grid;
		gap: clamp(1rem, 2.5vw, 2rem);
	}

	.gallery figure {
		margin: 0;
	}

	.gallery :global(img) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 4 / 3;
	}

	@media (min-width: 900px) {
		.gallery {
			grid-template-columns: 3fr 2fr;
			align-items: start;
		}
		.g-b {
			margin-top: 18%;
		}
		.g-b :global(img) {
			aspect-ratio: 4 / 5;
		}
		.g-c {
			width: 80%;
			justify-self: end;
		}
		.g-d {
			margin-top: -14%;
		}
	}

	@media (min-width: 900px) {
		.g-e {
			grid-column: 1 / -1;
		}
		.g-e :global(img) {
			aspect-ratio: 21 / 9;
		}
	}

	/* ---------- mood triptych ---------- */
	.mood {
		padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 4rem) 0;
	}

	.triptych {
		max-width: var(--max-width);
		margin: 0 auto;
		display: grid;
		gap: clamp(0.75rem, 2vw, 1.5rem);
		grid-template-columns: 1fr 1fr;
		align-items: end;
	}

	.triptych figure {
		margin: 0;
	}

	.triptych :global(img) {
		display: block;
		width: 100%;
		object-fit: cover;
		aspect-ratio: 3 / 4;
	}

	.t-whisk {
		grid-column: 1 / -1;
		order: -1;
	}

	.t-whisk :global(img) {
		aspect-ratio: 3 / 2;
	}

	@media (min-width: 900px) {
		.triptych {
			grid-template-columns: 1fr 1.7fr 1fr;
		}
		.t-whisk {
			grid-column: auto;
			order: 0;
		}
		.t-firewood {
			margin-bottom: 4rem;
		}
	}

	/* ---------- location ---------- */
	.coords {
		display: block;
		margin-top: 0.4rem;
		font-family: var(--font-serif);
		font-size: 1.8rem;
		color: var(--ink);
		letter-spacing: 0.02em;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 2rem;
		margin-top: 2rem;
		font-size: 0.85rem;
	}

	/* ---------- info ---------- */
	.info-head {
		max-width: 40rem;
		margin-bottom: 3.5rem;
	}

	.info-grid {
		display: grid;
		gap: 0 clamp(2rem, 4vw, 4rem);
		grid-template-columns: 1fr;
	}

	@media (min-width: 640px) {
		.info-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1000px) {
		.info-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.info-grid article {
		border-top: 1px solid var(--line);
		padding: 1.75rem 0 1.5rem;
	}

	.info-grid h3 {
		margin: 0 0 0.85rem;
	}

	.info-grid p {
		font-size: 0.88rem;
		margin: 0;
	}

	/* ---------- guides ---------- */
	.guides {
		padding-top: 0;
	}

	.guide-link {
		display: block;
		margin: 1.5rem 0 1.25rem;
		font-family: var(--font-serif);
		font-size: clamp(1.7rem, 3.5vw, 2.5rem);
		line-height: 1.2;
		text-decoration: none;
	}

	.guide-link:hover {
		font-style: italic;
		color: var(--ink);
	}

	.small-link {
		font-size: 0.8rem;
		letter-spacing: 0.08em;
	}

	/* ---------- booking ---------- */
	.book {
		background: var(--stone);
	}

	.book-grid {
		max-width: var(--max-width);
		margin: 0 auto;
		display: grid;
		gap: 3rem clamp(3rem, 7vw, 7rem);
	}

	@media (min-width: 900px) {
		.book-grid {
			grid-template-columns: 5fr 7fr;
		}
	}

	.book-text {
		max-width: 26rem;
	}
</style>
