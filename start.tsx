import { createServer } from 'vite';
import { join } from 'path';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import myConfig from './frontend/tailwind.config';
import { readFile, writeFile } from 'fs/promises';
import { chdir, cwd } from 'process';
import nodemon from 'nodemon';

chdir('frontend');

const dirname = cwd();

const server = await createServer({
	root: dirname,
	configFile: join(dirname, 'vite.config.ts')
});
await server.listen();

let bufferOld = '', bufferNew = '';
(async () => {
	const inputFilePath = './src/input.css', outputFilePath = './src/output.css';
	bufferNew = await readFile(inputFilePath, 'utf8');
	if (bufferOld === bufferNew) return;
	await writeFile(outputFilePath, (await postcss([tailwindcss(myConfig)]).process((bufferNew), {
		from: inputFilePath,
		to: outputFilePath
	})).css);
	bufferOld = bufferNew;
})();

const daemon = nodemon({
	cwd: '../backend',
	script: 'src/server.ts',
	execMap: {
		ts: 'tsx'
	},
	ext: 'ts,json',
	watch: ['.']
});
daemon.on('crash', () => daemon.restart());
