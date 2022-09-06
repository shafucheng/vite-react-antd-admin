/// <reference types="vite/client" />

// global config
interface GlobalConfig {
  APP_BASEURL?: string
}
export declare global {
  interface Window {
    __CONFIG__?: GlobalConfig
  }
}

// vite define
declare const __APP_VERSION__: string

// vite env
interface ImportMeta {
  readonly env: {
    readonly VITE_APP_TITLE: string
  }
}

// dayjs replace moment
declare module 'moment' {
  import { Dayjs } from 'dayjs'
  namespace moment {
    type Moment = Dayjs
  }
  export = moment
  export as namespace moment
}
