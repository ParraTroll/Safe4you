import { defineConfig } from "vite";
import react from "@vitejs/react-swc";
import path from "path";

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
  }
});
