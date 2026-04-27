import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  target: 'es2018',
  external: ['react'],
  treeshake: true,
  outExtension({ format }) {
    return { js: format === 'esm' ? '.esm.js' : '.js' };
  },
});
