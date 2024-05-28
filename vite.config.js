import { defineConfig } from 'vite';

export default defineConfig({
  // override viteup's defaults, this package doesn't need sourcemaps.
  build: {
    sourcemap: false,
  },
  // override viteup's defaults, this package doesn't need viteup's compiler.
  plugins: [],
  // override vite's default, this package doesn't need vite's compiler.
  esbuild: false,
});
