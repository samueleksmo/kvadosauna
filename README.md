# Kvädö Sauna (Ekudden Bastu) – kvadosauna.se

Website for Ekudden Bastu (Kvädö Sauna): a private wood-fired sauna with sea swimming at Kvädöfjärden.
Built with SvelteKit 2 / Svelte 5 and hosted on Cloudflare Workers (free plan).

## Development

```bash
npm install
cp .env.example .env   # fill in values to test the booking form locally
npm run dev
```

## Booking requests

The form on the landing page (`#book`) posts to `/api/booking`, which emails the request via
[Resend](https://resend.com). Set these as **Secrets** in Cloudflare (Workers & Pages → kvadosauna →
Settings → Variables and Secrets) and in `.env` for local development:

| Variable             | Required | Purpose                                                              |
| -------------------- | -------- | -------------------------------------------------------------------- |
| `RESEND_API_KEY`     | yes      | API key from Resend                                                  |
| `BOOKING_TO_EMAIL`   | yes      | Inbox that receives requests (reply to the email to answer the guest) |
| `BOOKING_FROM_EMAIL` | no       | Sender on a Resend-verified domain; also enables guest confirmations |

Without `BOOKING_FROM_EMAIL`, Resend's test sender is used, which can only deliver to the email
address of your Resend account.

## Photos

Full-size originals live in `photos-original/` (not committed). After adding or replacing a photo run:

```bash
npm run images
```

This crops, colour-grades (one consistent muted, warm look) and writes 800/1600/2400px JPEGs to
`static/images/`, used via `<Photo name="…">`. Per-photo crop and grading tweaks are at the top of
`scripts/optimize-images.js`. New photos are picked up automatically by file name.

## Languages & SEO

- Landing pages: `/` (sv), `/en`, `/de`, `/da`, `/nl` – texts in `src/lib/i18n/`.
- Guides and FAQ are Swedish only (`src/lib/content/`).
- `hreflang`, canonical, Open Graph and LocalBusiness structured data are in `SeoHead.svelte`;
  `/sitemap.xml` is generated at build time.

## Hosting & deploy (Cloudflare Workers)

Config is in `wrangler.jsonc`; cache headers for photos in `_headers`.

First time:

```bash
npx wrangler login            # opens the browser, log in to your Cloudflare account
npm run deploy                # builds and uploads – prints a *.workers.dev URL
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put BOOKING_TO_EMAIL
```

After that, `npm run deploy` publishes changes. Alternatively connect the GitHub repo in the
Cloudflare dashboard (Workers & Pages → Create → Import a repository) for automatic deploys on push;
build command `npm run build`, deploy command `npx wrangler deploy`.

`npm run preview` runs the production build locally in Cloudflare's runtime (reads secrets from a
`.dev.vars` file instead of `.env`).

### Custom domain (kvadosauna.se)

1. Register the domain at a Swedish registrar (e.g. Inleed, one.com, Loopia).
2. Add the domain in Cloudflare (Add a domain → Free plan) and change the nameservers at the registrar
   to the two Cloudflare nameservers shown.
3. Workers & Pages → kvadosauna → Settings → Domains & Routes → Add → Custom domain:
   `kvadosauna.se` (and `www.kvadosauna.se`).
4. Email: Email → Email Routing → forward e.g. `bokning@kvadosauna.se` to your inbox.
5. Resend: Domains → Add `kvadosauna.se`, copy the DNS records into Cloudflare DNS, then set the
   `BOOKING_FROM_EMAIL` secret (e.g. `Ekudden Bastu <bokning@kvadosauna.se>`).

## Licence & photos

The code in this repository may be read and reused freely. The photos are **not** covered by that:

- Photos of the sauna (`sauna`, `view`, `inside`, `autumn`, `coordinates`) © Kvädö Sauna – all rights reserved.
- Mood photos (`bay`, `whisk`, `firewood`, `reflection`, `forest-lake`) are from [Unsplash](https://unsplash.com)
  under the Unsplash License; photographers are credited in `src/lib/content/credits.js` and in the site footer.
