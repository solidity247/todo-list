import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
​
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //-----GitHub Pages require these settings
  base: "./",
  build: {
    outDir: "docs",
  },
  //-----GitHub Pages settings end
});
