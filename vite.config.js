import { defineConfig  } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@/': new URL('./src/', import.meta.url).pathname,
        },
    },
    build: {
        target: 'esnext',
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'VDepartureBoard',
            fileName: (format) => `v-departure-board.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // Add external deps here
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
