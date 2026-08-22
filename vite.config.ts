import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import path from "path";

// https://vitejs.dev
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
