import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // If using Tailwind v3

export default defineConfig({
  plugins: [react()],
  base: '/Coffee/', // <--- MUST BE HERE
})
