import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // This ensures assets are linked relatively, which is crucial for GitHub Pages subdirectories
  base: './', 
});