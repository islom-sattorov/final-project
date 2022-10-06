import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: [
                "@mui/material/Box"
            ]
        }
    }
    // server: {
    //     port: '8080',
    //     http: true,
    // }
})
