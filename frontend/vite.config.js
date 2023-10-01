import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
        "/api": "http://127.0.0.1:4000"
          // // we can adjust the target based on our backend port
          // target: "http://127.0.0.1:4000",
          // changeOrigin:true,
          // secure: false,
          // rewrite: (path)=>path.replace(/^\/api/,"")
      }
  }
})
