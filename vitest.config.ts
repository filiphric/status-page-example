import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './')
    },
  },
})