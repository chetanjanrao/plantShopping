import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/chetanjanrao/e-plantShopping",
  plugins: [react()],
})
