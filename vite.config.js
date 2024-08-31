import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig(({ command, mode }) => {
//   // Load environment variables based on the current mode (development or production)
//   const env = loadEnv(mode, process.cwd(), '');

//   // Use the loaded environment variable to set the base path
//   const basePath = env.VITE_BASE_PATH || '/';

//   return {
//     plugins: [react()],
//     base: basePath,
//   };
// });
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
      plugins: [react()],
      base: process.env.VITE_BASE_PATH,
  });
}