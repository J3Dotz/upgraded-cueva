/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SANITY_API_PROJECT_ID: string;
  readonly SANITY_API_DATASET: string;
  readonly SANITY_API_READ_TOKEN: string;
  readonly SANITY_WEBHOOK_SECRET: string;
  readonly VERCEL_DEPLOY_HOOK_URL: string;
  readonly RESEND_API_KEY: string;
  readonly SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
