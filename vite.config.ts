import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        pdvFacil: fileURLToPath(new URL('./pdv-facil/index.html', import.meta.url)),
      },
    },
  },
  test: {
    environment: 'jsdom',
  },
});
