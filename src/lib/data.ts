import { codingCafeEvents } from '$lib/coding-cafe-events';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type Training = {
	id: string;
	title: string;
	description: string;
	level: DifficultyLevel;
	audience: string[];
	duration: string;
	format: 'Online' | 'In-person' | 'Hybrid';
	learningOutcomes: string[];
	materialsLink?: string;
	tags: string[];
};

export type EventItem = {
	id: string;
	type: 'training' | 'cafe';
	title: string;
	date: string;
	location: string;
	speaker?: string;
	description: string;
	registrationLink?: string;
	relatedTrainingId?: string;
};

export type Resource = {
	id: string;
	title: string;
	abstract: string;
	type: 'Tutorial' | 'Guide' | 'Tool' | 'Policy';
	tags: string[];
	url: string;
	source: 'Internal (LUMC)' | 'External';
};

export type TeamMember = {
	name: string;
	role: string;
	image?: string;
};

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();

const getDate = (dayOffset: number, hour = 9) => {
	const d = new Date(currentYear, currentMonth, 1);
	d.setDate(d.getDate() + dayOffset);
	d.setHours(hour, 0, 0, 0);
	return d.toISOString();
};

export const trainings: Training[] = [
	{
		id: 't1',
		title: 'Introduction to R for Medical Research',
		description:
			'A foundational course covering R syntax, data manipulation with dplyr, and basic visualization.',
		level: 'Beginner',
		audience: ['PhD Candidates', 'Researchers'],
		duration: '4 sessions (12 hours)',
		format: 'In-person',
		learningOutcomes: ['Master R syntax', 'Clean datasets', 'Create plots with ggplot2'],
		tags: ['R', 'Data Analysis', 'Statistics'],
		materialsLink: 'https://github.com/lumc/intro-r'
	},
	{
		id: 't2',
		title: 'Version Control with Git',
		description:
			'Learn how to manage your code history, collaborate with others, and publish your work.',
		level: 'Intermediate',
		audience: ['All Staff'],
		duration: '1 day',
		format: 'Hybrid',
		learningOutcomes: ['Init repositories', 'Branching & Merging', 'Resolving conflicts'],
		tags: ['Git', 'Reproducibility'],
		materialsLink: 'https://github.com/lumc/git-course'
	},
	{
		id: 't3',
		title: 'Reproducible Workflows with Snakemake',
		description: 'Build scalable and reproducible data analysis pipelines.',
		level: 'Advanced',
		audience: ['Bioinformaticians', 'Data Stewards'],
		duration: '2 days',
		format: 'Online',
		learningOutcomes: ['Pipeline design', 'Conda environments', 'Cluster execution'],
		tags: ['Python', 'Workflow', 'HPC']
	}
];

export const events: EventItem[] = [
	{
		id: 'e2',
		type: 'training',
		title: 'Introduction to R - Cohort A',
		date: getDate(2, 9),
		location: 'Building 1, Room J-01',
		description: 'The first session of our popular R course.',
		relatedTrainingId: 't1',
		registrationLink: '#'
	},
	{
		id: 'e4',
		type: 'training',
		title: 'Advanced Git Workshop',
		date: getDate(10, 13),
		location: 'Online',
		description: 'Deep dive into git rebase and submodules.',
		relatedTrainingId: 't2',
		registrationLink: '#'
	},
	{
		id: 'e5',
		type: 'training',
		title: 'Python for Beginners',
		date: getDate(20, 9),
		location: 'Building 2, Room V-05',
		description: 'Start scripting with Python.',
		registrationLink: '#'
	},
	...codingCafeEvents
];

export const resources: Resource[] = [
	{
		id: 'r1',
		title: 'LUMC GitLab Guide',
		abstract: 'Official guidelines for using the internal GitLab instance, including CI/CD templates.',
		type: 'Guide',
		source: 'Internal (LUMC)',
		tags: ['Version Control', 'Git'],
		url: '#'
	},
	{
		id: 'r2',
		title: 'Pro Git Book',
		abstract:
			'The authoritative guide to Git, available for free online. Covers everything from basics to internals.',
		type: 'Guide',
		source: 'External',
		tags: ['Version Control', 'Git'],
		url: 'https://git-scm.com/book/en/v2'
	},
	{
		id: 'r3',
		title: 'Git Cheat Sheet',
		abstract: 'A quick reference for the most common commands you will use daily.',
		type: 'Tool',
		source: 'External',
		tags: ['Version Control', 'Git'],
		url: '#'
	},
	{
		id: 'r4',
		title: 'The Turing Way',
		abstract: 'A handbook for reproducible, ethical and collaborative data science.',
		type: 'Guide',
		source: 'External',
		tags: ['Open Science', 'Reproducibility', 'FAIR'],
		url: 'https://the-turing-way.netlify.app/'
	},
	{
		id: 'r5',
		title: 'Software Management Plans',
		abstract: 'A template and guide for writing a SMP for your grant application.',
		type: 'Policy',
		source: 'Internal (LUMC)',
		tags: ['FAIR', 'Management'],
		url: '#'
	},
	{
		id: 'r6',
		title: 'Fair Software Route',
		abstract: 'Step-by-step interactive guide to making your research software FAIR.',
		type: 'Tool',
		source: 'External',
		tags: ['FAIR', 'Open Science'],
		url: 'https://fair-software.nl'
	},
	{
		id: 'r7',
		title: 'LUMC Python Guidelines',
		abstract: 'Standard practices for structuring Python packages and environments at LUMC.',
		type: 'Guide',
		source: 'Internal (LUMC)',
		tags: ['Python', 'Best Practices'],
		url: '#'
	},
	{
		id: 'r8',
		title: 'RStudio Cheatsheets',
		abstract: 'Collection of cheatsheets for dplyr, ggplot2, and RMarkdown.',
		type: 'Tool',
		source: 'External',
		tags: ['R', 'Data Analysis'],
		url: '#'
	},
	{
		id: 'r9',
		title: 'Conda for Biologists',
		abstract: 'How to manage complex dependencies in bioinformatics projects.',
		type: 'Tutorial',
		source: 'External',
		tags: ['Python', 'Environment'],
		url: '#'
	},
	{
		id: 'r10',
		title: 'Shark Cluster Docs',
		abstract: 'Documentation for submitting jobs to the LUMC Shark HPC cluster.',
		type: 'Guide',
		source: 'Internal (LUMC)',
		tags: ['HPC', 'Infrastructure'],
		url: '#'
	},
	{
		id: 'r11',
		title: 'Docker for Scientists',
		abstract: 'Introduction to containerizing your research applications.',
		type: 'Tutorial',
		source: 'External',
		tags: ['Infrastructure', 'Docker'],
		url: '#'
	}
];

export const team: TeamMember[] = [
	{ name: 'Prof. Data', role: 'Scientific Lead' },
	{ name: 'Jane Smith', role: 'Training Coordinator' },
	{ name: 'John Doe', role: 'Research Software Engineer' }
];
