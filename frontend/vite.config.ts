import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// GitHub Pages
	// base: '/AI-Personalities-React-App/',
	server: {
		cors: true
	},
	appType: 'mpa',
	build: {
		rollupOptions: {
			input: {
				main: resolve(join(__dirname, './index.html')),
				app: resolve(join(__dirname, './app/index.html')),
				404: resolve(join(__dirname, './404.html'))
			}
		}
	}
});
