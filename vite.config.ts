import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
      name: '@reactresume/components-reactpdf',
      fileName: 'components',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-pdf'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      include: ['lib'],
      tsconfigPath: './tsconfig.app.json',
      insertTypesEntry: true,
    }),
    libInjectCss(),
  ],
});
