import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vanlife/',
  server: {
    historyApiFallback: true, // Enable HTML5 history API fallback
  },
})
