// ─── Types ────────────────────────────────────────────────────────────────────

export interface ResumeLink {
	label: string;
	url: string;
	type: 'primary' | 'secondary';
}

export interface ResumeAbout {
	name: string;
	role: string;
	bio: string;
	facts: string[];
	links: ResumeLink[];
}

export interface ResumeProject {
	name: string;
	desc: string;
	tech: string[];
	url?: string;
}

export interface ResumeSkillGroup {
	label: string;
	items: string[];
}

export interface ResumeContact {
	email: string;
	github: string;
	linkedin: string;
	available: boolean;
}

export interface ResumeData {
	about: ResumeAbout;
	projects: ResumeProject[];
	skills: ResumeSkillGroup[];
	contact: ResumeContact;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Edit this file to update your portfolio content.
// The 3D scene reads from this same source, so changes here update both the
// interactive room labels AND the SEO-friendly HTML fallback pages.

export const resume: ResumeData = {
	about: {
		name: 'Jumana Abdulfatah Abdullah Hussein',
		role: 'Final-year Computer Science student',
		bio: 'Final-year Computer Science student at Arab Open University seeking COOP training in IT or software development.',
		facts: [
			'GPA 3.9/4.0',
			'Dean’s List for two consecutive terms in 2026',
			'Expected graduation May 2027',
			'Sales and Marketing Representative at Falcon Power Global, Sep 2024 to present'
		],
		links: [
			{ label: 'GitHub', url: 'https://github.com/jumana-x', type: 'primary' },
			{ label: 'Portfolio', url: '/', type: 'secondary' }
		]
	},

	projects: [
		{
			name: 'LunaNav',
			desc: 'Built a React and JavaScript prototype and integrated an existing 3D lunar terrain viewer. Team Falak-6 placed 1st at the Jeddah Local Event of the NASA Space Apps Challenge 2026.',
			tech: ['React', 'JavaScript'],
			url: 'https://lunanav-ten.vercel.app'
		},
		{
			name: 'ZPARK',
			desc: 'Team graduation project in progress. This smart parking system connects a Flutter app and Firebase services with license plate-based entrance checks and ESP32 sensors.',
			tech: ['Flutter', 'Firebase', 'ESP32']
		},
		{
			name: 'GameVerse',
			desc: 'Solo game discovery and recommendation website built in Google AI Studio, connected to an n8n workflow, and integrated with an API from RapidAPI.',
			tech: ['Google AI Studio', 'n8n', 'RapidAPI']
		}
	],

	skills: [
		{ label: 'Languages & Frameworks', items: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'React'] },
		{ label: 'Design & Modeling', items: ['Figma', 'StarUML'] },
		{ label: 'Databases & Backend', items: ['MySQL', 'MongoDB', 'Firebase'] },
		{
			label: 'AI & Automation',
			items: ['Prompt engineering', 'Google AI Studio', 'n8n', 'API integration with RapidAPI']
		},
		{
			label: 'Tools',
			items: ['VS Code', 'IntelliJ IDEA', 'NetBeans', 'Jupyter Notebook', 'GitHub', 'Vercel', 'MySQL Workbench', 'MongoDB Compass', 'GanttProject']
		}
	],

	contact: {
		email: 'jumanaxowili@gmail.com',
		github: 'https://github.com/jumana-x',
		linkedin: 'https://www.linkedin.com/in/jumanaowili1/',
		available: true
	}
};
