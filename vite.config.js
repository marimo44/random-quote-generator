import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
