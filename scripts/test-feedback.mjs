import { rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const scratch = resolve(root, '.tmp', 'feedback-tests');
if (!scratch.startsWith(root + sep)) throw new Error('Test scratch must stay inside the repository.');
rmSync(scratch, { recursive: true, force: true });
try {
	const result = spawnSync(
		process.execPath,
		[require.resolve('@playwright/test/cli'), 'test', ...process.argv.slice(2)],
		{
			cwd: root,
			stdio: 'inherit',
		},
	);
	if (result.error) throw result.error;
	process.exitCode = result.status ?? 1;
} finally {
	rmSync(scratch, { recursive: true, force: true });
}
