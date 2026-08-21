import { defineConfig } from "vite";
import react from "@vitejs/react-swc";
import path from "path";

// https://vitejs.dev
export default defineConfig({
  base: "/online-shield-spark/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // This bypasses strict errors during local build steps if needed
  build: {
    chunkSizeWarningLimit: 1000,
  }
});
