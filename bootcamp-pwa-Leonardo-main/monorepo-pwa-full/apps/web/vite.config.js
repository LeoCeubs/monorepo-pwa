import { defineConfig } from 'vite'

// Config mínima sem plugins para evitar erros de dependência
export default defineConfig({
  server: { port: 5173 },
  build: { outDir: 'dist' }
})
