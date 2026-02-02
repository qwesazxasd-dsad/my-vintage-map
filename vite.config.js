import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, 
    strictPort: true, // 5173번이 사용 중이면 그냥 에러 내고 멈춰라 
  },
})
