import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync } from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/speak-play-learn/',
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  },
  buildEnd: () => {
    copyFileSync('dist/index.html', 'dist/404.html');
  },
});
