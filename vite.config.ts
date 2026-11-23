import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Configuração oficial do TanStack Start para deploy na Netlify.
export default defineConfig({
  plugins: [tanstackStart(), netlify(), viteReact(), tailwindcss(), tsconfigPaths()],
});
