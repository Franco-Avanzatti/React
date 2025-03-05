import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separa las dependencias externas en un archivo aparte
          }
          if (id.includes('components')) {
            return 'components'; // Separa los componentes en otro archivo
          }
          if (id.includes('pages')) {
            return 'pages'; // Separa las páginas si tienes una estructura tipo `pages/`
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000 // Aumenta el límite de advertencia para evitar el mensaje
  }
})
