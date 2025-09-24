import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      routes: "/src/routes",
      context: "/src/context",
      app: "/src/app",
      features: "/src/features",
      shared: "/src/shared",
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
