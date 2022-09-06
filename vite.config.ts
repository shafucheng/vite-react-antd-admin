import fs from 'fs'
import path from 'path'

import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import momentToDayjs from 'unplugin-moment-to-dayjs/vite'
import { defineConfig } from 'vite'
import imp from 'vite-plugin-imp'

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'),
)

export default defineConfig({
  define: {
    __APP_VERSION__: `"${packageJson.version}"`,
  },
  plugins: [
    basicSsl(),
    react(),
    unocss(),
    momentToDayjs(),
    imp({
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '~antd': 'antd',
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
