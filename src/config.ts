const config = window.__CONFIG__ ?? {}

export const APP_TITLE = config?.APP_BASEURL ?? import.meta.env.VITE_APP_TITLE
