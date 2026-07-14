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

export interface ResumeSkills {
	frontend: string[];
	backend: string[];
	tools: string[];
}

export interface ResumeContact {
	email: string;
	github: string;
	linkedin: string;
	twitter: string;
	location: string;
	available: boolean;
}

export interface ResumeData {
	about: ResumeAbout;
	projects: ResumeProject[];
	skills: ResumeSkills;
	contact: ResumeContact;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Edit this file to update your portfolio content.
// The 3D scene reads from this same source, so changes here update both the
// interactive room labels AND the SEO-friendly HTML fallback pages.

export const resume: ResumeData = {
	about: {
		name: 'Jumana Ismail',
		role: 'computer science student',
		bio: 'Final-year Computer Science student with a passion for web development. I enjoy working across both Web and Databases, with a particular interest in creating clean, interactive, and responsive user interfaces. Currently building projects, exploring modern technologies, and growing as a developer.',
		facts: ['Final-Year Computer Science Student', 'Web & Backend Enthusiast', 'Building Personal Projects', 'Exploring Modern Technologies'],
		links: [
			{ label: 'GitHub', url: 'https://github.com/alexmorgan', type: 'primary' },
			{ label: 'Portfolio', url: '/', type: 'secondary' },
			{ label: 'Resume PDF', url: '#', type: 'secondary' }
		]
	},

	projects: [
		{
			name: 'Zpark',
			desc: 'Developed a parking reservation system that helps users find and book parking spaces for malls and events, improving convenience and reducing search time.',
			tech: ['Flutter', 'Dart', 'Firebase', 'Figma']
		}
	],

	skills: {
		frontend: ['HTML', 'CSS', 'Flutter', 'JavaScript'],
		backend: ['Firebase','MySQL', 'MongoDB','OOP' , 'AI Fundemtals'],
		tools: ['Git / GitHub', 'Figma', 'Vercel ', 'VS code', 'Jupyter Notebook', 'CI/CD']
		
	},

	contact: {
		email: 'juowili@gmail.com',
		github: 'github.com/jumana-ismail',
		linkedin: 'www.linkedin.com/in/jumanaowili1',
		twitter: '@toxlx',
		location: 'Saudi Arabia, Jeddah',
		available: true
	}
};
