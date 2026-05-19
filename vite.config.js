import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {

          if (id.includes('node_modules')) {
            return 'vendor';
          }

          if (id.includes('components')) {
            return 'components';
          }

          if (id.includes('pages')) {
            return 'pages';
          }
        },
      },
    },

    chunkSizeWarningLimit: 1000
  }
})