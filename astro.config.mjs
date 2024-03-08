import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind( { nesting: true,configFile: './tailwind.config.js',})
  ],
  site: 'https://manga-app-mau-proyects.koyeb.app',
  
  build: {
    inlineStylesheets: 'always'
  },
  
    server: { port: 8000 },
  

  
});