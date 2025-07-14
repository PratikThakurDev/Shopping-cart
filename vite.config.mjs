// OLD:
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// NEW (already correct if using ESM):
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
    },
});
