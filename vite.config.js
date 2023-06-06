import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import data from './data.json';

   export default defineConfig({
        base : '/responsive-webpages/',
        build: {
          rollupOptions: {
              input : {
                  main: 'index.html',
                  bootstrap: 'index-bootstrap.html',
                  materialize: 'index-materialize.html',
              }
          },
      },
      plugins: [handlebars({
      context : {
        data
      }
  })]
    
});