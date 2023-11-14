import { defineConfig } from "vite";

export default defineConfig({
  // Specify the entry file for your application
  build: {
    outDir: "dist", // Output directory for production build
    assetsDir: "assets", // Directory for static assets
  },
  server: {
    port: 3000, // Specify the port for the development server
  },
  // Configure plugins if needed
  plugins: [],
});
