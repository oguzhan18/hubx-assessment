import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
      '#components': path.resolve(__dirname, './src/components'),
      '#layout': path.resolve(__dirname, './src/layout'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
      '#services': path.resolve(__dirname, './src/services'),
      '#utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
