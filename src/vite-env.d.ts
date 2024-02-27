/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BEND_BASE_URL: string;
  readonly VITE_BEND_PROJECT_ID: string;
  readonly VITE_DOMAIN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
