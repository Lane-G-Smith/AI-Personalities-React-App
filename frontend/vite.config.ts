import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/app',
	server: {
		port: 4430,
		cors: true,
		https: true
	}
});
