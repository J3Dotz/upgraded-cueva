# La Cueva de Miravet — Web

Astro site with Sanity CMS. Deployed on Vercel.

## Local development

```bash
npm install
npm run dev        # Astro dev server  →  http://localhost:4321
npx sanity dev     # Sanity Studio     →  http://localhost:3333
```

Copy `.env.example` to `.env` and fill in the values before running locally.

---

## Webhooks

### Why webhooks?

All content pages are statically prerendered at build time. When an editor publishes or unpublishes a document in Sanity Studio, the live site won't reflect the change until a new Vercel build runs. The webhook endpoint (`/api/revalidate`) automates that: Sanity calls it on every publish/unpublish, and it triggers a Vercel rebuild so the static pages are regenerated with fresh content.

### Setup

#### 1 — Generate a signing secret

```bash
openssl rand -hex 32
```

Save this value as `SANITY_WEBHOOK_SECRET` in your Vercel environment variables (Vercel → Project → Settings → Environment Variables).

#### 2 — Create a Vercel Deploy Hook

1. Go to **Vercel → Project → Settings → Git → Deploy Hooks**.
2. Create a hook named `sanity-content` targeting the `main` branch.
3. Copy the generated URL.
4. Save it as `VERCEL_DEPLOY_HOOK_URL` in your Vercel environment variables.

#### 3 — Register the webhook in Sanity

1. Go to **[Sanity Manage](https://www.sanity.io/manage) → API → Webhooks → Add webhook**.
2. Fill in the fields:

   | Field | Value |
   |-------|-------|
   | Name | `Vercel revalidate` |
   | URL | `https://upgraded-cueva.vercel.app/api/revalidate` |
   | Dataset | `production` |
   | Trigger on | `Create`, `Update`, `Delete` |
   | Filter | *(leave empty — all document types)* |
   | Projection | *(leave empty — default payload)* |
   | HTTP method | `POST` |
   | HTTP Headers | *(none required)* |
   | Secret | *(paste the value of `SANITY_WEBHOOK_SECRET`)* |
   | Enable | ✅ |

3. Click **Save**.

#### 4 — Verify

Publish any document in Sanity Studio. Within 30–60 seconds a new Vercel deployment should appear in your project's deployment list. Once it completes, the change is live.

### How the endpoint works

`src/pages/api/revalidate.ts` performs three steps on each inbound POST:

1. **Signature verification** — validates the `sanity-webhook-signature` header using HMAC-SHA256 against `SANITY_WEBHOOK_SECRET`. Requests with an invalid or missing signature are rejected with `401`. Payloads older than 5 minutes are also rejected (replay protection).
2. **Payload parsing** — reads `_type` from the Sanity document payload to identify which document changed.
3. **Rebuild trigger** — calls the Vercel Deploy Hook URL, which queues a new build.
