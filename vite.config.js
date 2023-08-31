import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/apolly-landing/',
  plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('swiper-')
          }
        }
      }
    ),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/styles/variables.scss" as *; @use "@/assets/styles/mixins.scss" as mix;'
      }
    }
  }
})
