<script>
	import LandingPage from '$lib/components/LandingPage.svelte';
	import { onMount } from 'svelte';
	import { setLocale } from '$lib/i18n/locale';

	/** @type {{ localeCode: import('$lib/i18n/translations.js').Locale }} */
	let { localeCode } = $props();

	onMount(() => setLocale(localeCode));
</script>

<LandingPage forcedLocale={localeCode} />
