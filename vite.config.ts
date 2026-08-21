import { defineConfig } from "vite";
import react from "@vitejs/react-swc";
import path from "path";

export default defineConfig({
  base: "/online-shield-spark/", // 🌟 Updated specifically for your repository
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
