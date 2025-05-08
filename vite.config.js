import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React_part2/', // 👈 this must match the repo name exactly
  plugins: [react()],
})
