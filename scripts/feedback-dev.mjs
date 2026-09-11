import { dev } from 'astro';

// Programmatic startup avoids Astro's agent background mode and leaves any user dev server alone.
const server = await dev({
	server: { host: '127.0.0.1', port: 6174 },
	cacheDir: './.tmp/feedback-tests/astro',
	vite: { cacheDir: './.tmp/feedback-tests/vite' },
});
for (const signal of ['SIGINT', 'SIGTERM']) {
	process.once(signal, async () => {
		await server.stop();
		process.exit(0);
	});
}
