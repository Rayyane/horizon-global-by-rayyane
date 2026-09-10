import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about-us.html"),
        projects: resolve(__dirname, "projects-and-impact.html"),
        tours: resolve(__dirname, "bidesh-jatra-tours.html"),
        education: resolve(__dirname, "bidesh-jatra-education.html"),
        enterprise: resolve(__dirname, "bidesh-jatra-enterprise.html"),
        medivisa: resolve(__dirname, "medivisa.html"),
        bimatech: resolve(__dirname, "bimatech.html"),
      },
    },
  },
});
