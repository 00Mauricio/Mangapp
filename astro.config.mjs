import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind( { nesting: true,configFile: './tailwind.config.js',})
  ],
  site: 'https://manga-app-mau-proyects.koyeb.app',
  // esta parte esla necesaria para costruir el css en el build
  output: 'server', // o 'hybrid'
  build: {
    client: './client'
  },
  
  
    server: { port: 8000 },
  

  
});