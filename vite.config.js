import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/agencia-de-viajes-/',
  plugins: [react(), tailwindcss()],
})
