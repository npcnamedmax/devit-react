import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            components: '/src/components',
            svg: '/src/svg/svg.jsx',
            assets: '/src/assets',
            data: '/src/data',
            icons: '/src/assets/icons',
            skeleton: '/src/skeleton',
            layouts: '/src/layouts',
            hooks: '/src/hooks',
            utils: '/src/utils',
            providers: '/src/providers',
        },
    },
});
