import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vanlife/',
  server: {
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.startsWith('/vanlife') && !req.url.includes('.')) {
          req.url = '/index.html';
        }
        next();
      });
    },
  },
})
