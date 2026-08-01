import { mkdir, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const postsDirectory = path.join(root, 'src', 'routes', 'blog', 'posts');
const outputDirectory = path.join(root, 'static', 'blog', 'og');
const fontPath = path.join(
	root,
	'node_modules',
	'@fontsource-variable',
	'figtree',
	'files',
	'figtree-latin-wght-normal.woff2',
);

const categoryColors = {
	Dev: '#ffd65a',
	Life: '#b8a5ff',
	Systems: '#16c47f',
	Work: '#f93827',
};

function getFrontmatterValue(frontmatter, field) {
	const match = frontmatter.match(new RegExp(`^${field}:\\s*(['"]?)(.*?)\\1\\s*$`, 'm'));
	return match?.[2].replaceAll("''", "'") ?? '';
}

function escapeXml(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

function wrapTitle(title) {
	const fontSize = title.length > 68 ? 52 : title.length > 48 ? 60 : 68;
	const maxCharacters = fontSize === 52 ? 28 : fontSize === 60 ? 25 : 22;
	const lines = [];
	let line = '';

	for (const word of title.split(/\s+/)) {
		const candidate = line ? `${line} ${word}` : word;
		if (candidate.length <= maxCharacters || !line) {
			line = candidate;
		} else {
			lines.push(line);
			line = word;
		}
	}

	if (line) lines.push(line);
	return { fontSize, lines: lines.slice(0, 4) };
}

function createCard({ title, category, fontData }) {
	const accent = categoryColors[category] ?? '#ffd65a';
	const { fontSize, lines } = wrapTitle(title);
	const lineHeight = Math.round(fontSize * 1.08);
	const titleHeight = lineHeight * lines.length;
	const startY = Math.max(220, 330 - titleHeight / 2);
	const titleLines = lines
		.map(
			(line, index) =>
				`<tspan x="92" y="${startY + index * lineHeight}">${escapeXml(line.replaceAll('’', "'"))}</tspan>`,
		)
		.join('');

	return `
		<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
			<style>
				@font-face {
					font-family: 'Figtree';
					src: url(data:font/woff2;base64,${fontData}) format('woff2');
					font-weight: 300 900;
				}
				text { font-family: 'Figtree', sans-serif; }
			</style>
			<rect width="1200" height="630" fill="#141417" />
			<rect width="16" height="630" fill="${accent}" />
			<rect x="92" y="82" width="72" height="8" fill="${accent}" />
			<path d="M1024 72h90v28l-58 58h58v30h-90v-30l58-58h-58z" fill="${accent}" />
			<text x="92" y="140" fill="${accent}" font-size="25" font-weight="700" letter-spacing="1.5">${escapeXml(category.toUpperCase())} / ZIXIAN&apos;S BLOG</text>
			<text fill="#e8e8ea" font-size="${fontSize}" font-weight="800" letter-spacing="-1.4">${titleLines}</text>
			<line x1="92" y1="528" x2="1108" y2="528" stroke="#e8e8ea" stroke-opacity="0.14" />
			<text x="92" y="575" fill="#e8e8ea" fill-opacity="0.62" font-size="25" font-weight="500">zixianchen.com/blog</text>
			<text x="1108" y="575" fill="#e8e8ea" fill-opacity="0.62" font-size="25" font-weight="500" text-anchor="end">Zixian Chen</text>
		</svg>
	`;
}

const [postFiles, font] = await Promise.all([readdir(postsDirectory), readFile(fontPath)]);
await mkdir(outputDirectory, { recursive: true });

let generated = 0;
for (const filename of postFiles) {
	if (!filename.endsWith('.md')) continue;

	const source = await readFile(path.join(postsDirectory, filename), 'utf8');
	const frontmatter = source.split(/^---\s*$/m)[1] ?? '';
	if (getFrontmatterValue(frontmatter, 'published') !== 'true') continue;

	const title = getFrontmatterValue(frontmatter, 'title');
	const category = getFrontmatterValue(frontmatter, 'category') || 'Blog';
	const slug = getFrontmatterValue(frontmatter, 'slug') || filename.replace(/\.md$/, '');
	const svg = createCard({ title, category, fontData: font.toString('base64') });

	await sharp(Buffer.from(svg))
		.png({ compressionLevel: 9, palette: true })
		.toFile(path.join(outputDirectory, `${slug}.png`));
	generated += 1;
}

console.log(`Generated ${generated} blog social cards in ${path.relative(root, outputDirectory)}.`);
