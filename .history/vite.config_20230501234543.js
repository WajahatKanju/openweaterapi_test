import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    mimeTypes: {
      'js': 'text/javascript',
    },
  },
  plugins: [react()],
})
