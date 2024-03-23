/// <reference types="vitest" />
import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { configDefaults } from 'vitest/dist/config.js'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      tsconfigPath: 'tsconfig.app.json'
    }),
    libInjectCss()
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'CuteAlert',
      formats: ['es', 'cjs', 'umd'],
      fileName: 'cute-alert'
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.ts')
      },
      output: {
        exports: 'named'
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    coverage: {
      provider: 'v8',
      all: true,
      thresholds: {
        100: true
      },
      exclude: [
        ...configDefaults.exclude,
        '*.cjs',
        '*.d.ts',
        'src/types/**',
        'docs',
        '.storybook',
        'storybook-static',
        'src/stories',
        'src/constants',
        'src/lib/index.ts',
        'src/main.ts'
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
