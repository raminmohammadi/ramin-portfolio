import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add this line to handle video files
  assetsInclude: ['**/*.MOV', '**/*.mp4'], 
})