
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        qiteler: './qiteler/index.html',
        olkeler: './olkeler/index.html',
        detail: './olkeler/detail/index.html',
        login: './login/index.html',
      }
    }
  },
  server: {
    port: 3000, 
  }
});