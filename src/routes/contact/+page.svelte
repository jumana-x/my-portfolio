<script lang="ts">
	import { resume } from '$lib/data/resume.js';
	import { onMount } from 'svelte';

	onMount(() => { document.body.classList.add('scrollable'); return () => document.body.classList.remove('scrollable'); });
</script>

<svelte:head>
	<meta name="description" content="Contact {resume.about.name} about COOP training in IT or software development." />
	<title>Contact {resume.about.name} — {resume.about.role}</title>
</svelte:head>

<div class="page">
	<a href="/" class="back-link">← Back to 3D Portfolio</a>

	<header>
		<h1>Contact</h1>
		<p class="role">{resume.about.name}</p>
		{#if resume.contact.available}
			<span class="badge">Seeking COOP training</span>
		{/if}
	</header>

	<section aria-label="Contact information">
		<address>
			<dl>
				<div class="dl-row">
					<dt>Email</dt>
					<dd><a href="mailto:{resume.contact.email}">{resume.contact.email}</a></dd>
				</div>
				<div class="dl-row">
					<dt>GitHub</dt>
					<dd><a href={resume.contact.github} rel="noopener noreferrer">{resume.contact.github.replace('https://', '')}</a></dd>
				</div>
				<div class="dl-row">
					<dt>LinkedIn</dt>
					<dd><a href={resume.contact.linkedin} rel="noopener noreferrer">{resume.contact.linkedin.replace('https://www.', '')}</a></dd>
				</div>
			</dl>
		</address>
	</section>
</div>

<style>
	@import '../_page-base.css';

	address { font-style: normal; }

	dl {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin: 0;
	}

	.dl-row {
		display: flex;
		gap: 16px;
		align-items: baseline;
	}

	dt {
		min-width: 80px;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(255 255 255 / 0.35);
	}

	dd {
		margin: 0;
		font-size: 15px;
		color: rgba(255 255 255 / 0.75);
	}

	dd a {
		color: #88aaff;
		text-decoration: none;
	}

	dd a:hover { text-decoration: underline; }
</style>
