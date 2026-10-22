<script>
	/** @type {import('$lib/content/guides/types').GuidePage} */
	export let guide;

	import Photo from '$lib/components/Photo.svelte';
	import { pillarPath, siteUrl } from '$lib/content/site';
	import { clusterGuides } from '$lib/content/guides/index';
</script>

<svelte:head>
	<title>{guide.title} | Ekudden Bastu</title>
	<meta name="description" content={guide.description} />
	<link rel="canonical" href="{siteUrl}{guide.path}" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={guide.title} />
	<meta property="og:description" content={guide.description} />
	<meta property="og:url" content="{siteUrl}{guide.path}" />
	<meta property="og:image" content="{siteUrl}/images/{guide.heroImage?.image ?? 'sauna'}-1600.jpg" />
	<meta property="og:locale" content="sv_SE" />
</svelte:head>

<article class="guide-article">
	<div class="guide-container">
		<nav class="breadcrumb" aria-label="Brödsmulor">
			<a href="/">Hem</a>
			<span aria-hidden="true">›</span>
			{#if guide.pillarLink}
				<a href={pillarPath}>Guider</a>
				<span aria-hidden="true">›</span>
			{/if}
			<span aria-current="page">{guide.shortTitle ?? guide.title}</span>
		</nav>

		<header class="guide-header">
			<p class="guide-eyebrow">Ekudden Bastu · Kvädöfjärden</p>
			<h1>{guide.title}</h1>
			<p class="guide-lead">{guide.description}</p>
			{#if guide.heroImage}
				<figure class="guide-hero">
					<Photo name={guide.heroImage.image} alt={guide.heroImage.alt} sizes="(min-width: 760px) 720px, 100vw" eager />
					{#if guide.heroImage.caption}
						<figcaption>{guide.heroImage.caption}</figcaption>
					{/if}
				</figure>
			{/if}
		</header>

		<div class="guide-body">
			{#each guide.sections as section}
				<section id={section.id} class="guide-section">
					<h2>{section.title}</h2>
					{#each section.paragraphs ?? [] as paragraph}
						<p>{paragraph}</p>
					{/each}
					{#if section.list}
						<ul>
							{#each section.list as item}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}
					{#if section.listOrdered}
						<ol>
							{#each section.listOrdered as item}
								<li>{item}</li>
							{/each}
						</ol>
					{/if}
					{#if section.note}
						<aside class="guide-note">{section.note}</aside>
					{/if}
				</section>
			{/each}
		</div>

		{#if guide.related?.length}
			<aside class="guide-related">
				<h2>Läs mer</h2>
				<ul>
					{#each guide.related as link}
						<li><a href={link.path}>{link.title}</a></li>
					{/each}
				</ul>
			</aside>
		{/if}

		{#if !guide.isPillar}
			<aside class="guide-pillar-cta">
				<h2>Hela guiden</h2>
				<p>
					Det här är en del av vår stora guide till privat bastu och havsbad vid Kvädöfjärden.
				</p>
				<a href={pillarPath} class="guide-cta">Kvädöfjärden – privat bastu & havsbad →</a>
			</aside>
		{:else}
			<aside class="guide-cluster-nav">
				<h2>Fördjupa dig</h2>
				<div class="cluster-grid">
					{#each clusterGuides as cluster}
						<a href={cluster.path} class="cluster-card">
							<h3>{cluster.title}</h3>
							<p>{cluster.description}</p>
						</a>
					{/each}
				</div>
			</aside>
		{/if}

		<footer class="guide-footer">
			<a href="/#book" class="btn">Boka bastun</a>
			<a href="/vanliga-fragor" class="guide-cta-secondary">Vanliga frågor</a>
		</footer>
	</div>
</article>

<style>
	.guide-article {
		padding: 2rem 1.5rem 4rem;
		background: var(--cream);
	}

	.guide-container {
		max-width: 42rem;
		margin: 0 auto;
	}

	.breadcrumb {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 0.5rem;
		font-size: 0.85rem;
		color: var(--text-muted);
		margin-bottom: 2rem;
	}

	.breadcrumb a {
		color: var(--falu-red);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.guide-header {
		margin-bottom: 2.5rem;
	}

	.guide-eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.72rem;
		color: var(--text-muted);
		margin: 0 0 0.75rem;
	}

	.guide-header h1 {
		text-align: left;
		font-size: clamp(1.75rem, 4vw, 2.35rem);
		margin: 0 0 1rem;
		line-height: 1.2;
	}

	.guide-lead {
		font-size: 1.12rem;
		line-height: 1.65;
		color: var(--text-muted);
		margin: 0 0 1.5rem;
	}

	.guide-hero {
		margin: 0;
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow: var(--shadow);
	}

	.guide-hero :global(img) {
		width: 100%;
		display: block;
		aspect-ratio: 16 / 10;
		object-fit: cover;
	}

	.guide-hero figcaption {
		padding: 0.75rem 1rem;
		font-size: 0.85rem;
		background: white;
		text-align: center;
	}

	.guide-section {
		margin-bottom: 2.5rem;
	}

	.guide-section h2 {
		text-align: left;
		font-size: clamp(1.7rem, 3vw, 2.1rem);
		margin: 2.5rem 0 1rem;
		color: var(--text);
	}

	.guide-section p {
		margin: 0 0 1rem;
		line-height: 1.75;
	}

	.guide-section ul,
	.guide-section ol {
		margin: 0 0 1rem;
		padding-left: 1.35rem;
		line-height: 1.7;
		color: var(--text-muted);
	}

	.guide-section li {
		margin-bottom: 0.4rem;
	}

	.guide-note {
		background: var(--wood-light);
		border-left: 4px solid var(--falu-red);
		padding: 1rem 1.25rem;
		border-radius: 0 var(--radius) var(--radius) 0;
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--text);
	}

	.guide-related,
	.guide-pillar-cta,
	.guide-cluster-nav {
		background: white;
		border-radius: var(--radius);
		padding: 1.75rem;
		box-shadow: var(--shadow);
		margin-bottom: 2rem;
	}

	.guide-related h2,
	.guide-pillar-cta h2,
	.guide-cluster-nav h2 {
		text-align: left;
		font-size: 1.7rem;
		margin: 0 0 1rem;
	}

	.guide-related ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.guide-related li {
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--wood-light);
	}

	.guide-related li:last-child {
		border-bottom: none;
	}

	.cluster-grid {
		display: grid;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.cluster-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	.cluster-card {
		display: block;
		padding: 1.25rem;
		background: var(--cream);
		border-radius: var(--radius);
		text-decoration: none;
		color: inherit;
		transition: transform 0.15s, box-shadow 0.15s;
		border: 1px solid transparent;
	}

	.cluster-card:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow);
		border-color: var(--wood);
		text-decoration: none;
	}

	.cluster-card h3 {
		margin: 0 0 0.5rem;
		font-size: 1rem;
		color: var(--falu-red);
	}

	.cluster-card p {
		margin: 0;
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.5;
	}

	.guide-footer {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
	}

	.guide-cta {
		display: inline-block;
		font-weight: 400;
		color: var(--falu-red);
		text-decoration: none;
	}

	.guide-cta:hover {
		text-decoration: underline;
	}



	.guide-cta-secondary {
		font-size: 0.95rem;
	}
</style>
