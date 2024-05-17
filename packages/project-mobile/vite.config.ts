import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { fileURLToPath, URL } from 'node:url'

const NODE_ENV = process.env.NODE_ENV

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('NODE_ENV', NODE_ENV)
  console.log('command：', command)
  console.log('mode：', mode)

  return {
    base: './',
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [eslint(), react()],
    server: {
      host: '0.0.0.0',
      port: 3002,
      // proxy: {
      //   '/api': {
      //     target: 'http://127.0.0.1:8080',
      //     changeOrigin: true,
      //   },
      // },
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
    },
  }
})
