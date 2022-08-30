/// <reference types="vite/client" />

// vite define
declare const __APP_VERSION__: string

// vite env
interface ImportMeta {
  readonly env: {
    readonly VITE_APP_TITLE: string
  }
}
