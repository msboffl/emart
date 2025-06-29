import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  platform: 'node',
  target: 'esnext',
  outDir: 'dist',
  format: ['cjs', 'esm'],
  sourcemap: true,
  splitting: false,
  clean: true,
  dts: true,
});
