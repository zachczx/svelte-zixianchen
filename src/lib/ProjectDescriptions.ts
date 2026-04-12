interface ProjectDescriptions {
	[index: string]: {
		name: string;
		subtitle: string;
		tldr?: string;
		url: string;
		archived?: boolean;
	};
}

export const descriptions: ProjectDescriptions = {
	abbreviation: {
		name: 'Abbreviation',
		subtitle: 'Singapore Govt abbreviation/acronym search',
		url: 'https://abbreviation.zixian.dev',
	},
	appraize: {
		name: 'Appraize',
		subtitle: 'Drag & Drop Ranking',
		url: 'https://appraize.zixian.dev/',
	},
	apptitude: {
		name: 'Apptitude',
		subtitle: 'Tech-related upskilling',
		url: 'https://titude.app/',
	},
	btonomics: {
		name: 'BTOnomics',
		subtitle: 'Home renovation blog for budget folks',
		url: 'https://btonomics.com',
	},
	cancelninja: {
		name: 'Cancel Ninja',
		subtitle: 'SaaS & Dark Pattern tracker',
		url: 'https://cancelninja.com',
	},
	grumplr: {
		name: 'Grumplr',
		subtitle: 'Reddit-lite style bulletin board',
		url: 'https://grumplr.com',
	},
	meetrics: {
		name: 'Meetrics',
		subtitle: 'Meeting cost calculator',
		url: 'https://meetrics.zixian.dev/',
	},
	rinku: {
		name: 'Rinku',
		subtitle: 'URL shortener',
		url: 'https://zczx.org',
	},
	roamichi: {
		name: 'Roamichi',
		subtitle: 'Holiday management system',
		url: 'https://roamichi.com',
	},
	cubby: {
		name: 'Cubby',
		subtitle: 'Home admin & activity tracker',
		url: 'https://cubby.dev',
	},
	wronged: {
		name: 'Wronged',
		subtitle: 'Products, Problems, UX Chatbot',
		url: 'https://getwronged.com',
	},
	'btonomics-wordpress': {
		name: 'BTOnomics (Wordpress)',
		subtitle: 'Home renovation blog for budget folks',
		tldr: 'I started a Wordpress blog for budget home renovation.',
		url: 'https://web.archive.org/web/20180513112335/http://pewpewpew.cc/',
		archived: true,
	},
	eatyourmeds: {
		name: 'Eat Your Medicine!',
		subtitle: 'Medicine dose tracker',
		tldr: 'I built a webapp to track and plan medicine doses between parents.',
		url: 'https://eatyourmeds.zixian.dev/',
		archived: true,
	},
	rankamate: {
		name: 'Rank-a-Mate',
		subtitle: 'Drag & drop ranking v0.1',
		tldr: 'Rank-a-Mate is a drag-and-drop web app I built to replace slow Excel-based ranking processes, streamlining sessions with features like supplementary info and quota sliders.',
		url: 'https://rankamate.zixian.dev/',
		archived: true,
	},
};
