import type { NotificationMessage } from './runtime';

export type BotCommand = 'help' | 'start' | 'stop';

export interface TelegramMessage {
	chat: {
		id: number;
		type: string;
	};
	text?: string;
}

export interface TelegramUpdate {
	message?: TelegramMessage;
}

export interface TelegramApiResponse {
	description?: string;
	error_code?: number;
	ok: boolean;
	parameters?: {
		retry_after?: number;
	};
}

export function parseCommand(text: string): BotCommand | undefined {
	const token = text.trim().split(/\s+/, 1)[0]?.toLowerCase();
	const command = token?.split('@', 1)[0];

	if (command === '/start') return 'start';
	if (command === '/stop') return 'stop';
	if (command === '/help') return 'help';
	return undefined;
}

export function formatNotification(message: NotificationMessage): string {
	const description = message.description.trim();
	const shortenedDescription =
		description.length > 800 ? `${description.slice(0, 797).trimEnd()}...` : description;
	const parts = [`New post: ${message.title}`];

	if (shortenedDescription) parts.push(shortenedDescription);
	parts.push(message.url);

	return parts.join('\n\n');
}

export async function sendTelegramMessage(
	botToken: string,
	chatId: string,
	text: string,
): Promise<TelegramApiResponse> {
	if (!botToken) throw new Error('TELEGRAM_BOT_TOKEN is not configured.');

	const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ chat_id: chatId, text }),
	});

	try {
		return (await response.json()) as TelegramApiResponse;
	} catch {
		return {
			ok: false,
			error_code: response.status,
			description: `Telegram returned HTTP ${response.status}.`,
		};
	}
}
