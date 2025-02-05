import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/algorithm-playground",
  build: {
    outDir: "./docs",
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
});
