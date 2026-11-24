<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { resume } from '$lib/data/resume.js';

	let { children } = $props();

	// ── JSON-LD structured data ───────────────────────────────────────────────
	// Two schemas:
	//  1. Person  — tells Google this is a real developer's resume.
	//  2. CreativeWork — describes the 3D portfolio project itself.
	const personSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: resume.about.name,
		jobTitle: resume.about.role,
		description: resume.about.bio,
		email: `mailto:${resume.contact.email}`,
		sameAs: [resume.contact.github, resume.contact.linkedin],
		knowsAbout: resume.skills.flatMap(({ items }) => items)
	});

	const creativeWorkSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: `${resume.about.name} — Interactive 3D Portfolio`,
		description: resume.about.bio,
		author: { '@type': 'Person', name: resume.about.name },
		inLanguage: 'en'
	});
</script>

<svelte:head>
	<!-- ── Favicon ─────────────────────────────────────────────────────────── -->
	<link rel="icon" href={favicon} />

	<!-- ── Primary SEO ────────────────────────────────────────────────────── -->
	<title>{resume.about.name} — {resume.about.role} | Interactive 3D Portfolio</title>
	<meta name="description" content="{resume.about.name}. {resume.about.bio}" />
	<meta name="author" content={resume.about.name} />
	<meta name="robots" content="index, follow" />

	<!-- ── Open Graph ─────────────────────────────────────────────────────── -->
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="{resume.about.name} — Interactive 3D Portfolio" />
	<meta property="og:description" content="{resume.about.bio}" />
	<meta property="og:site_name" content="{resume.about.name} Portfolio" />
	<meta property="og:locale" content="en_US" />

	<!-- ── Twitter Card ────────────────────────────────────────────────────── -->
	<meta name="twitter:title" content="{resume.about.name} — Interactive 3D Portfolio" />
	<meta name="twitter:description" content={resume.about.bio} />

	<!-- ── Performance hints ──────────────────────────────────────────────── -->
	<meta name="theme-color" content="#0d0d1a" />
	<meta name="color-scheme" content="dark" />

	<!-- ── JSON-LD structured data ────────────────────────────────────────── -->
	{@html `<script type="application/ld+json">${personSchema}</script>`}
	{@html `<script type="application/ld+json">${creativeWorkSchema}</script>`}
</svelte:head>

<!-- Global font + base styles -->
<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow: hidden;
		background: #0d0d1a;
		font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	/* Static pages (about, projects, contact) need scroll */
	:global(body.scrollable) {
		overflow: auto;
	}
</style>

{@render children()}
