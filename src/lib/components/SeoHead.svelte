<script>
	import { siteUrl, siteName, localePaths, coords, parkingAddress, pricing } from '$lib/content/site';

	/** @type {{ locale: import('$lib/i18n/translations.js').Locale; title: string; description: string }} */
	let { locale, title, description } = $props();

	const ogLocales = { sv: 'sv_SE', en: 'en_GB', de: 'de_DE', da: 'da_DK', nl: 'nl_NL' };
	const image = `${siteUrl}/images/sauna-1600.jpg`;

	let url = $derived(siteUrl + (localePaths[locale] === '/' ? '/' : localePaths[locale]));

	let schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `${siteUrl}/#business`,
		name: siteName,
		alternateName: 'Kvädö Sauna',
		description,
		url,
		image,
		priceRange: `${pricing.sek} SEK`,
		currenciesAccepted: 'SEK',
		address: {
			'@type': 'PostalAddress',
			streetAddress: parkingAddress,
			addressRegion: 'Östergötlands län',
			addressCountry: 'SE'
		},
		geo: { '@type': 'GeoCoordinates', latitude: coords.lat, longitude: coords.lng },
		hasMap: `https://www.google.com/maps?q=${coords.lat},${coords.lng}`,
		amenityFeature: [
			{ '@type': 'LocationFeatureSpecification', name: 'Wood-fired sauna', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Sea swimming', value: true }
		]
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	{#each Object.entries(localePaths) as [code, path]}
		<link rel="alternate" hreflang={code} href={siteUrl + path} />
	{/each}
	<link rel="alternate" hreflang="x-default" href="{siteUrl}/" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:locale" content={ogLocales[locale]} />
	<meta name="twitter:card" content="summary_large_image" />

	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
