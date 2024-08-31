import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use an environment variable to set the base path dynamically
const basePath = import.meta.env.VITE_BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
})