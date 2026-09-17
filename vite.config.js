import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (or whatever plugin you are using)

export default defineConfig({
  plugins: [react()],
  base: '/Coffee/', // <--- MUST BE EXACTLY THIS, NOT A COMMENT
})
