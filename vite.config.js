import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or whatever framework plugin you are using

export default defineConfig({
  plugins: [react()],
  base: '/Coffee/', // <--- THIS IS CRITICAL
})
