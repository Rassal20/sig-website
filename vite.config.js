import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for traditional hosting
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable source maps for production
    rollupOptions: {
      output: {
        manualChunks: undefined, // Prevent code splitting issues on traditional hosting
      }
    }
  }
})
