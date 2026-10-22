<script>
	import { bookingForm } from '$lib/i18n/booking';

	/** @type {{ locale: import('$lib/i18n/translations.js').Locale; submitLabel: string }} */
	let { locale, submitLabel } = $props();

	let f = $derived(bookingForm[locale] ?? bookingForm.en);

	/** @type {'idle' | 'sending' | 'success' | 'error' | 'invalid'} */
	let status = $state('idle');
	const today = new Date().toISOString().slice(0, 10);
	const startedAt = Date.now();

	/** @param {SubmitEvent} event */
	async function submit(event) {
		event.preventDefault();
		const form = /** @type {HTMLFormElement} */ (event.currentTarget);
		if (!form.checkValidity()) {
			status = 'invalid';
			form.reportValidity();
			return;
		}
		status = 'sending';
		const data = Object.fromEntries(new FormData(form));
		try {
			const res = await fetch('/api/booking', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ ...data, locale, elapsed: Date.now() - startedAt })
			});
			if (res.ok) {
				status = 'success';
				form.reset();
			} else {
				status = res.status === 400 ? 'invalid' : 'error';
			}
		} catch {
			status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<p class="form-message success" role="status">{f.success}</p>
{:else}
	<form class="booking-form" onsubmit={submit} novalidate>
		<div class="row">
			<label>
				<span>{f.name} *</span>
				<input name="name" required maxlength="100" autocomplete="name" />
			</label>
			<label>
				<span>{f.email} *</span>
				<input name="email" type="email" required maxlength="200" autocomplete="email" />
			</label>
		</div>
		<div class="row">
			<label>
				<span>{f.phone}</span>
				<input name="phone" type="tel" maxlength="40" autocomplete="tel" />
			</label>
			<label>
				<span>{f.guests} *</span>
				<input name="guests" type="number" min="1" max="20" value="2" required />
			</label>
		</div>
		<div class="row">
			<label>
				<span>{f.date} *</span>
				<input name="date" type="date" min={today} required />
			</label>
			<label>
				<span>{f.arrival} *</span>
				<input name="arrival" type="time" required />
			</label>
		</div>
		<label>
			<span>{f.message}</span>
			<textarea name="message" rows="3" maxlength="2000" placeholder={f.messagePlaceholder}></textarea>
		</label>
		<!-- Honeypot: hidden from people, bots tend to fill it in -->
		<label class="hp" aria-hidden="true">
			Website <input name="website" tabindex="-1" autocomplete="off" />
		</label>

		{#if status === 'error' || status === 'invalid'}
			<p class="form-message error" role="alert">{status === 'error' ? f.error : f.invalid}</p>
		{/if}

		<button type="submit" class="btn" disabled={status === 'sending'}>
			{status === 'sending' ? f.sending : submitLabel}
		</button>
	</form>
{/if}

<style>
	.booking-form {
		display: grid;
		gap: 1.6rem;
	}

	.row {
		display: grid;
		gap: 1.6rem;
		grid-template-columns: 1fr;
	}

	@media (min-width: 560px) {
		.row {
			grid-template-columns: 1fr 1fr;
		}
	}

	label {
		display: grid;
		gap: 0.2rem;
		font-size: 0.68rem;
		font-weight: 400;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
	}

	input,
	textarea {
		font: inherit;
		font-size: 0.95rem;
		font-weight: 300;
		letter-spacing: 0;
		text-transform: none;
		padding: 0.55rem 0;
		border: none;
		border-bottom: 1px solid var(--ink);
		border-radius: 0;
		background: transparent;
		color: var(--ink);
		width: 100%;
		min-height: 2.6rem;
	}

	textarea {
		resize: vertical;
	}

	input::placeholder,
	textarea::placeholder {
		color: var(--muted);
		opacity: 0.8;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-bottom-width: 2px;
		margin-bottom: -1px;
	}

	.hp {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	button {
		justify-self: start;
		margin-top: 0.75rem;
	}

	button:disabled {
		opacity: 0.6;
		cursor: progress;
	}

	.form-message {
		margin: 0;
		padding: 1rem 0;
		border-top: 1px solid var(--ink);
		border-bottom: 1px solid var(--ink);
		color: var(--ink);
	}

	.success {
		font-family: var(--font-serif);
		font-size: 1.6rem;
		line-height: 1.3;
	}

	.error {
		font-size: 0.85rem;
		color: var(--accent);
		border-color: var(--accent);
	}
</style>
