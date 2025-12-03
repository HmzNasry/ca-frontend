import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/upload": {
        target: "https://ca-backend-eujk.onrender.com",
        changeOrigin: true,
      },
      "/files": {
        target: "https://ca-backend-eujk.onrender.com",
        changeOrigin: true,
      },
      "/ws": {
        target: "https://ca-backend-eujk.onrender.com",
        ws: true,
        changeOrigin: true,
      },
    },
  },
})
