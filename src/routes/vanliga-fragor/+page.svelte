<script>
	import { faqItems, faqMeta } from '$lib/content/faq.js';
	import { pillarPath, siteUrl } from '$lib/content/site.js';

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqItems.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer
			}
		}))
	};
</script>

<svelte:head>
	<title>{faqMeta.title} | Ekudden Bastu</title>
	<meta name="description" content={faqMeta.description} />
	<link rel="canonical" href="{siteUrl}/vanliga-fragor" />
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>

<article class="faq-page">
	<div class="faq-container">
		<nav class="breadcrumb" aria-label="Brödsmulor">
			<a href="/">Hem</a>
			<span aria-hidden="true">›</span>
			<span aria-current="page">Vanliga frågor</span>
		</nav>

		<header class="faq-header">
			<h1>{faqMeta.title}</h1>
			<p>{faqMeta.description}</p>
			<p class="faq-pillar-link">
				Läs också vår <a href={pillarPath}>kompletta guide till privat bastu och havsbad vid Kvädöfjärden</a>.
			</p>
		</header>

		<div class="faq-list">
			{#each faqItems as item (item.id ?? item.question)}
				<details class="faq-item" id={item.id}>
					<summary><h2>{item.question}</h2></summary>
					<div class="faq-answer">
						<p>{item.answer}</p>
					</div>
				</details>
			{/each}
		</div>

		<footer class="faq-footer">
			<a href="/#book" class="btn">Boka bastun</a>
		</footer>
	</div>
</article>

<style>
	.faq-page {
		padding: 2rem 1.5rem 4rem;
		background: var(--cream);
	}

	.faq-container {
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
	}

	.faq-header h1 {
		text-align: left;
		font-size: clamp(1.75rem, 4vw, 2.2rem);
		margin: 0 0 1rem;
	}

	.faq-header > p {
		margin: 0 0 1rem;
		line-height: 1.65;
	}

	.faq-pillar-link {
		font-size: 0.95rem;
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin: 2rem 0;
	}

	.faq-item {
		background: white;
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		padding: 0;
		overflow: hidden;
	}

	.faq-item summary {
		list-style: none;
		cursor: pointer;
		padding: 1.25rem 1.5rem;
	}

	.faq-item summary::-webkit-details-marker {
		display: none;
	}

	.faq-item summary h2 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 300;
		text-align: left;
		color: var(--text);
		display: inline;
	}

	.faq-answer {
		padding: 0 1.5rem 1.25rem;
		border-top: 1px solid var(--wood-light);
	}

	.faq-answer p {
		margin: 1rem 0 0;
		line-height: 1.7;
		color: var(--text-muted);
	}


</style>
