/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',               // Set environment to jsdom for DOM-related tests
    globals: true,                      // Provide Jest-like globals (test, expect, etc.)
    setupFiles: './src/test/setup.ts',  // Ensure this path is correct
  },
});
