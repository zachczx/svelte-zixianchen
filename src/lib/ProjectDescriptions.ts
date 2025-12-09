interface ProjectDescriptions {
	[index: string]: {
		subtitle: string;
		tldr?: string;
		url: string;
	};
}

export const descriptions: ProjectDescriptions = {
	abbreviation: {
		subtitle: 'Singapore Govt abbreviation/acronym search',
		// tldr: "New workers don't know all the short words used at work.  I made a simple web app to help them quickly find out what those short words mean.",
		url: 'https://abbreviation.zixian.dev',
	},
	appraize: {
		subtitle: 'Drag & Drop Ranking',
		// tldr: 'Ranking things in Excel used to take too long because you had to type numbers and reorder everything by hand. I made a web app where you can just drag and drop things to rank them way faster than using Excel.',
		url: 'https://appraize.zixian.dev/',
	},
	apptitude: {
		subtitle: 'Tech-related upskilling',
		// tldr: 'My team was wasting time searching for tech learning materials. To fix this, I wrote a website that lets people discover new online resources and gain tech knowledge from different mediums.',
		url: 'https://titude.app/',
	},
	btonomics: {
		subtitle: 'Home renovation blog for budget folks',
		// tldr: "Wordpress was overkill for my blog. I rebuilt it with AstroJS to create a static site that's faster for readers and simpler for me to update.",
		url: 'https://btonomics.com',
	},
	cancelninja: {
		subtitle: 'SaaS & Dark Pattern tracker',
		// tldr: "Companies trick people into keeping subscriptions they don't want. I made a web app to track my subscriptions and warn me about these sneaky tricks.",
		url: 'https://cancelninja.com',
	},
	grumplr: {
		subtitle: 'Reddit-lite style bulletin board',
		// tldr: 'I like old school bulletin boards, so I tried building my own.',
		url: 'https://grumplr.com',
	},
	meetrics: {
		subtitle: 'Meeting cost calculator',
		// tldr: 'Meetrics is a straightforward calculator I created to expose the hidden costs of meetings, helping teams recognize and reduce meeting waste.',
		url: 'https://meetrics.zixian.dev/',
	},
	rinku: {
		subtitle: 'URL shortener',
		// tldr: 'I have many URLs that are long, especially for blog slugs. I have many domain names, some of which are short. I built a URL shortener with an admin panel to add urls and do basic analytics.',
		url: 'https://zczx.org',
	},
	roamichi: {
		subtitle: 'Holiday management system',
		tldr: 'I wanted to manage everything about my holiday.',
		url: 'https://roamichi.com',
	},
	cubby: {
		subtitle: 'Track the little things.',
		// tldr: 'Track when I last washed my towel.',
		url: 'https://cubby.dev',
	},
	wronged: {
		subtitle: 'Products, Problems, UX Chatbot',
		tldr: 'A chatbot that helps users with product management, UX, staff work.',
		url: 'https://getwronged.com',
	},
	'btonomics-wordpress': {
		subtitle: 'Home renovation blog for budget folks',
		tldr: 'I started a Wordpress blog for budget home renovation.',
		url: 'https://web.archive.org/web/20180513112335/http://pewpewpew.cc/',
	},
	eatyourmeds: {
		subtitle: 'Medicine dose tracker',
		tldr: 'I built a webapp to track and plan medicine doses between parents.',
		url: 'https://eatyourmeds.zixian.dev/',
	},
	rankamate: {
		subtitle: 'Drag & drop ranking v0.1',
		tldr: 'Rank-a-Mate is a drag-and-drop web app I built to replace slow Excel-based ranking processes, streamlining sessions with features like supplementary info and quota sliders.',
		url: 'https://rankamate.zixian.dev/',
	},
};
