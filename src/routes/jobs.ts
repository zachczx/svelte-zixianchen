export interface Job {
	year: string;
	title: string;
	desc: string;
	organization?: string;
	startDate: string; // ISO year-month: 'YYYY-MM'
	endDate?: string | null; // ISO year-month: 'YYYY-MM' or null for Present
}

export const jobs: Job[] = [
	{
		year: '2023',
		title: 'Deputy Director, Service Delivery Digitalization',
		desc: "Build, run stuff for citizens + employees services. Also dismantle what doesn't work.",
		organization: 'Ministry of Defence of Singapore',
		startDate: '2023-12',
		endDate: null,
	},
	{
		year: '2021',
		title: 'Deputy Director, Policy & Governance Directorate',
		desc: 'Policies & funding for Govt cloud, on-prem hosting, SG Tech Stack, endpoint devices, dev toolchains.',
		organization: 'Smart Nation Singapore',
		startDate: '2021-11',
		endDate: '2023-11',
	},
	{
		year: '2018',
		title: 'Assistant Director, Communications Technology',
		desc: 'Developed & bought media analytic products. Led investments in NLP & CV research.',
		organization: 'Ministry of Defence of Singapore',
		startDate: '2018-11',
		endDate: '2021-10',
	},
	{
		year: '2017',
		title: 'Communications Strategist',
		desc: 'Developed comms campaigns and strategies.',
		organization: 'Ministry of Defence of Singapore',
		startDate: '2017-11',
		endDate: '2018-10',
	},
	{
		year: '2015',
		title: 'Media Relations Officer',
		desc: 'Did public relations work. Got earned media. Managed crisis comms.',
		organization: 'Ministry of Defence of Singapore',
		startDate: '2015-09',
		endDate: '2017-10',
	},
	{
		year: '2013',
		title: 'NS Policy Executive',
		desc: 'Led NS policies for sportsmen, leave, citizenship, exit control.',
		organization: 'Ministry of Defence of Singapore',
		startDate: '2013-06',
		endDate: '2015-08',
	},
];

export function getJobDurationMonths(job: Job, referenceDate: Date = new Date()): number {
	const [startYear, startMonth] = job.startDate.split('-').map(Number);
	let endYear: number;
	let endMonth: number;

	if (job.endDate) {
		[endYear, endMonth] = job.endDate.split('-').map(Number);
	} else {
		endYear = referenceDate.getFullYear();
		endMonth = referenceDate.getMonth() + 1;
	}

	return Math.max(1, (endYear - startYear) * 12 + (endMonth - startMonth) + 1);
}

export function formatDuration(durationMonths: number): string {
	const years = Math.floor(durationMonths / 12);
	const months = durationMonths % 12;

	if (years === 0) {
		return `${months} mo${months === 1 ? '' : 's'}`;
	}
	if (months === 0) {
		return `${years} yr${years === 1 ? '' : 's'}`;
	}
	return `${years} yr${years === 1 ? '' : 's'} ${months} mo${months === 1 ? '' : 's'}`;
}

export interface JobWithTenure extends Job {
	durationMonths: number;
	durationText: string;
	units: number; // 6-month blocks
	percentage: number;
}

export function getJobsWithTenure(referenceDate: Date = new Date(), unitMonths: number = 6): JobWithTenure[] {
	const durations = jobs.map((job) => getJobDurationMonths(job, referenceDate));
	const totalMonths = durations.reduce((sum, d) => sum + d, 0);

	return jobs.map((job, index) => ({
		...job,
		durationMonths: durations[index],
		durationText: formatDuration(durations[index]),
		units: Math.max(1, Math.round(durations[index] / unitMonths)),
		percentage: Number(((durations[index] / totalMonths) * 100).toFixed(1)),
	}));
}
