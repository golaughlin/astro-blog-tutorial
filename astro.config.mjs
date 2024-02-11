import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://master--tangerine-taiyaki-793c73.netlify.app/",
  integrations: [preact()]
});