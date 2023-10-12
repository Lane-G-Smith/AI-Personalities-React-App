import { spawn } from 'child_process';
import { stdout } from 'process';

const processes = [spawn('npm urn backend:dev'), spawn('npm urn frontend:dev')];
for (const p of processes) {
	p.stdout.on('data', data => {
		stdout.write(data.toString());
	});
	p.stderr.on('data', data => {
		stdout.write(data.toString());
	});
}

process.on('exit', () => {
	for (const p of processes) p.kill();
	stdout.write('\nKilled all processes');
});
