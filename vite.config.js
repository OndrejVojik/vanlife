import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  // Load environment variables based on the current mode (development or production)
  const env = loadEnv(mode, process.cwd(), '');

  // Use the loaded environment variable to set the base path
  const basePath = env.VITE_BASE_PATH || '/';

  return {
    plugins: [react()],
    base: env.production.VITE_BASE_PATH,
  };
});
// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')
//   return {
//     // vite config
//     define: {
//       __APP_ENV__: JSON.stringify(env.APP_BASE_PATH),
//     },
//   }
// })