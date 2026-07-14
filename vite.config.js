import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '.',
        'C:/Users/HP/.gemini/antigravity-ide/brain/8a36b3f9-f036-4342-84ec-de75fd142537'
      ]
    }
  }
})

