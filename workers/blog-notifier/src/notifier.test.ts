import assert from 'node:assert/strict';
import test from 'node:test';
import { parseRss } from './rss.ts';
import { formatNotification, parseCommand } from './telegram.ts';

test('parseRss reads all items and decodes escaped metadata', () => {
	const posts = parseRss(`<?xml version="1.0"?>
<rss><channel>
	<item>
		<title>Newest &amp; useful</title>
		<link>https://zixianchen.com/blog/newest</link>
		<guid isPermaLink="true">https://zixianchen.com/blog/newest</guid>
		<description>One &lt; two &amp; three</description>
	</item>
	<item>
		<title>Backdated post</title>
		<link>https://zixianchen.com/blog/backdated</link>
		<guid isPermaLink="true">https://zixianchen.com/blog/backdated</guid>
		<description>Still needs to be detected.</description>
	</item>
</channel></rss>`);

	assert.deepEqual(posts, [
		{
			description: 'One < two & three',
			guid: 'https://zixianchen.com/blog/newest',
			title: 'Newest & useful',
			url: 'https://zixianchen.com/blog/newest',
		},
		{
			description: 'Still needs to be detected.',
			guid: 'https://zixianchen.com/blog/backdated',
			title: 'Backdated post',
			url: 'https://zixianchen.com/blog/backdated',
		},
	]);
});

test('parseCommand accepts Telegram command suffixes and start payloads', () => {
	assert.equal(parseCommand('/start'), 'start');
	assert.equal(parseCommand('/start follow-blog'), 'start');
	assert.equal(parseCommand('/stop@zixianchen_blog_bot'), 'stop');
	assert.equal(parseCommand('/help'), 'help');
	assert.equal(parseCommand('hello'), undefined);
});

test('formatNotification keeps the message simple and includes the post URL', () => {
	assert.equal(
		formatNotification({
			chatId: '123',
			description: 'A short summary.',
			guid: 'post-1',
			title: 'A new post',
			url: 'https://zixianchen.com/blog/a-new-post',
		}),
		'New post: A new post\n\nA short summary.\n\nhttps://zixianchen.com/blog/a-new-post',
	);
});
