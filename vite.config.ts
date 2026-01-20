import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
        routesDirectory: "./src/pages",
        generatedRouteTree: "./src/route-tree.gen.ts",
      }),
      react(),
      tailwindcss(),
    ],
    // server: {
    //   allowedHosts:true,
    // },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
