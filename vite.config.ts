import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePluginRadar } from 'vite-plugin-radar';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePluginRadar({
      analytics: {
        id: 'G-9WPX9XHJDG',
      },
    }),
  ],
});
