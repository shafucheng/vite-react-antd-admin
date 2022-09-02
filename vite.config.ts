import fs from 'fs'
import path from 'path'

import react from '@vitejs/plugin-react'
import momentToDayjs from 'unplugin-moment-to-dayjs/vite'
import { defineConfig } from 'vite'

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'),
)

export default defineConfig({
  define: {
    __APP_VERSION__: `"${packageJson.version}"`,
  },
  plugins: [react(), momentToDayjs()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
