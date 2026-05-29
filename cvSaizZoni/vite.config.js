import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/<tu-repo-name>/', // PASO IMPORTANTE: cambia esto por el nombre de tu repositorio en GitHub
});