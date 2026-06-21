import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bintikbumi-web/',
  assetsInclude: ['**/*.MP4', '**/*.mov', '**/*.MOV']
})
