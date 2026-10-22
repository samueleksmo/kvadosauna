/**
 * Svelte action: fades an element in when it scrolls into view.
 * Content stays visible if JS is off or motion is reduced.
 * @param {HTMLElement} node
 */
export function reveal(node) {
	if (typeof IntersectionObserver === 'undefined') return;
	if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	node.classList.add('reveal');
	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					node.classList.add('revealed');
					io.disconnect();
				}
			}
		},
		{ rootMargin: '0px 0px -10% 0px' }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
}
