import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://iamed.cc/mcps/revisor-notas
export default defineConfig({
  site: "https://iamed.cc",
  base: "/mcps/revisor-notas",
  output: "static",
  integrations: [tailwind()],
});
