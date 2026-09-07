import dayjs from 'dayjs';

export interface Job {
	title: string;
	desc: string;
	startDate: string; // ISO date: 'YYYY-MM-DD'
	endDate: string | null; // Inclusive ISO date: 'YYYY-MM-DD' or null for Present
}

export const jobs: Job[] = [
	{
		title: 'Deputy Director, Service Delivery Digitalization',
		desc: "Build, run stuff for citizens + employees services. Also dismantle what doesn't work.",
		startDate: '2023-12-01',
		endDate: null,
	},
	{
		title: 'Deputy Director, Policy & Governance Directorate',
		desc: 'Policies & funding for Govt cloud, on-prem hosting, SG Tech Stack, endpoint devices, dev toolchains.',
		startDate: '2021-11-01',
		endDate: '2023-11-30',
	},
	{
		title: 'Assistant Director, Communications Technology',
		desc: 'Developed & bought media analytic products. Led investments in NLP & CV research.',
		startDate: '2018-11-01',
		endDate: '2021-10-31',
	},
	{
		title: 'Communications Strategist',
		desc: 'Developed comms campaigns and strategies.',
		startDate: '2017-11-01',
		endDate: '2018-10-31',
	},
	{
		title: 'Media Relations Officer',
		desc: 'Did public relations work. Got earned media. Managed crisis comms.',
		startDate: '2015-09-01',
		endDate: '2017-10-31',
	},
	{
		title: 'NS Policy Executive',
		desc: 'Led NS policies for sportsmen, leave, citizenship, exit control.',
		startDate: '2013-06-01',
		endDate: '2015-08-31',
	},
];

export function getJobDurationMonths(job: Job, referenceDate: Date = new Date()): number {
	const start = dayjs(job.startDate);
	const endExclusive = job.endDate ? dayjs(job.endDate).add(1, 'day') : dayjs(referenceDate);

	return Math.max(1, endExclusive.diff(start, 'month'));
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
	year: string;
	durationMonths: number;
	durationText: string;
	units: number; // 6-month blocks
}

export function getJobsWithTenure(referenceDate: Date = new Date(), unitMonths: number = 6): JobWithTenure[] {
	return jobs.map((job) => {
		const durationMonths = getJobDurationMonths(job, referenceDate);

		return {
			...job,
			year: dayjs(job.startDate).format('YYYY'),
			durationMonths,
			durationText: formatDuration(durationMonths),
			units: Math.max(1, Math.round(durationMonths / unitMonths)),
		};
	});
}
