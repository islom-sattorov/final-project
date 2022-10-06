import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: [
                "@mui/material/Box",
                "@mui/material/",
                "@mui/material/*",
                "@mui/material/MenuItem",
                "@mui/material/Modal",
                "@mui/material/TextField",
                "@mui/material/TextField",
            ]
        }
    }
    // server: {
    //     port: '8080',
    //     http: true,
    // }
})
