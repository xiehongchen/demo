import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const outputPath = process.env.NODE_ENV === 'production' ? '/vue-demo' : ''
// https://vitejs.dev/config/
export default defineConfig({
  base: outputPath,
  plugins: [vue()],
})
