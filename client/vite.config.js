import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/v3': {
        target: 'https://api.sportmonks.com',
        changeOrigin: true,
      },
      '/v2.0': {
        target: 'https://soccer.sportmonks.com/api',
        changeOrigin: true,
      },
      '/api': {
        target: 'http://localhost:8800',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()]
})
