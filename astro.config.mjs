import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://mcp.iamed.cc/revisor-notas
export default defineConfig({
  site: "https://mcp.iamed.cc",
  base: "/revisor-notas",
  output: "static",
  integrations: [tailwind()],
});
