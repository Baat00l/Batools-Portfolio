import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '..',
        'C:/Users/batoo/OneDrive/Batools Portfolio'
      ]
    }
  }
})
