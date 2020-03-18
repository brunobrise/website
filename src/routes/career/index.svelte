<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`career.json`).then(r => r.json()).then(career => {
			return { career };
		});
	}
</script>

<script>
	export let career;
</script>

<style>
	h2 {
		font-weight: 600;
	}

	section  {
		padding-bottom: 1em;
	}

	#career {
		display: flex;
		flex-direction: column;
		padding-bottom:2em;
	}

	.title-cover {
		background-color: var(--blue);
		color: var(--white);
		line-height: 2.5;
		padding: 0 24px;
		vertical-align: middle;
		justify-items: center;
	}

	.title-cover-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.source {
		font-size: 0.4em;
		display: inline-block;
		text-decoration: none;
		margin-left: 0.5em;
	}

	.source-format {
		display: inline-block;
		list-style: none;
		margin-top: 8px;
		margin-left: 1.5em;
	}

	.logo {
		background-color: var(--white);
		width: 48px;
		padding: 4px;
	}


	.experiences, .recommendations {
		display:flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.experience, .education, .recommendation {
		display:flex;
		flex-direction: column;
		width:100%;
		margin-bottom: 1em;
		box-shadow: 0px 2px 3px var(--silver);
	}

	.experience:last-child .experience-job {
		border-bottom: none;
		border: none;
	}

	.experience-organization-cover {
		position: relative;
		height: 120px;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
	}

	#experiences .logo, #volunteer .logo {
		position: absolute;
		bottom: -24px;
		right: 16px;
		border: 1px solid var(--silver);
	}

	.experience-jobs {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		width: 100%;
	}

	.experience-job {
		padding: 1em;
	}

	.experience-job > .name,
	.education .name,
	.recommendation .name {
		font-weight: 800;
		/* font-size: 1.2em; */
	}

	.experience-job > .date,
	.education > .right > .date ,
	.recommendation > .top  > .right > .date {
		color: var(--gray);
		font-size: 0.8em;
	}

	.experience-job > .date > .duration  {
		float: right;
		background-color: var(--gray-dark);
		color: var(--white);
		padding: 0.1em 0.5em;
		margin-top:-2px;
		margin-left: 0.5em;
		font-size: 1em;
		cursor: default;
		border-radius: 3px;
	}

	.experience-job > .description {
		margin-top: 0.5em;
		padding: 0.2em 0 0.2em 0.5em;
		border-left: 2px solid var(--gray-light);
	}

	.experience-job > .description > :global(ul) {
		list-style: none;
		margin: 0.2em 0 1em;
	}

	.experience-job > .description :global(li) {
		margin-left: 1.2em;
	}

	.experience-job > .description :global(li):before {
		content: "✔ "
	}

	.experience-job > .organization > .contract:before,
	.education > .right > .diploma > .level:after,
	.recommendation > .top > .right > .organization > .relationship:before {
		content: " \2022  "
	}

	.education > .right > .date > .expiration {
		background-color: var(--gray-light);
		color: var(--white);
		margin-left: 0.5em;
		padding:0 0.5em;
		cursor: default;
		border-radius: 3px;
	}

	.education, .recommendation {
		display: flex;
		flex-direction: row;
		padding: 0.5em 0;
	}

	.education .logo, .recommendation .picture {
		width: 72px;
	}

	.education > .right > .diploma {
		font-size: 0.8em;
	}

	.tag-caption {
		font-size: 0.5em;
		margin-bottom: 1em;
	}

	.tag-caption .tag {
		border-radius: 2px;
		margin:0;
	}

	.tag {
		display: inline-block;
		background-color: var(--gray-dark);
		color: var(--white);
		padding: 0.2em 0.5em;
		margin: 2px 1px;
		border: none;
		font-size: 1.3em;
	}

	.tag a {
		text-decoration: none;
	}

	.button:hover {
		background-color: var(--green);
	}

	#skill .level, .level0{
		background-color: var(--gray-dark);
	}

	.recommendations {
		display: flex;
		flex-direction: column;
	}

	.recommendation {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.recommendation .top {
		display: flex;
		flex-direction: row;
		padding: 1em;
		border-bottom: 1px solid var(--white-whisper);
	}

	.recommendation .left {
		padding-right: 1em;
	}

	.recommendation .picture {
		width: 96px;
		border-radius: 50%;
		/* border: 1px solid var(--gray-light); */
	}

	.recommendation .organization {
		font-size: 0.8em;
	}

	.recommendation .message {
		margin: 1em auto;
		width: 80%;
		text-align: justify;
		word-spacing:-2px;
	}

	.topic {
		display: block;
		background-color: var(--gray-dark);
		color: var(--white);
		padding: 0.2em 0.5em;
		margin: 2px;
		border-radius: 3px;
	}

	.topic:hover {
		background-color: var(--green);
	}

	.topics a {
		text-decoration: none;
	}

	.topics a .name {
		text-decoration: underline;
	}

	.topic .description {
		display: block;
		font-style: italic;
	}

	.level1, .tag-caption > .fundamental {
		background-color: var(--blue-tint-1);
		color: var(--gray);
	}

	.level1:hover {
		background-color: var(--green);
		color: var(--white);
		animation-name: color-change-level1;
	}

	.level2, .tag-caption > .novice {
		background-color: var(--blue-tint-2);
	}

	.level3, .tag-caption > .intermediate {
		background-color: var(--blue-tint-3);
	}

	.level4, .tag-caption > .advanced {
		background-color: var(--blue);
	}

	.level5, .tag-caption > .expert {
		background-color: var(--red);
	}

	@media (min-width: 56em) {
		.title-cover-inner {
			max-width: 28em;
			margin:0 auto;
		}

		.source-format {
			float: none;
			display: inline-block;
			margin: 0 1em;
		}

		.source-format svg {
			width: 24px;
			height: 24px;
		}

		.logo {
			width: 72px;
			bottom: -36px;
			right: 28px;
		}

		.experience-organization-cover {
			height: 340px;
		}

		.tag-caption {
			font-size: 0.8em;
		}

		.recommendations {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-items: center;
			align-items: stretch;
			justify-content: space-between;
		}

		.recommendation {
			width: 49%;
		}

		.recommendation .message {
			height: 100%;
		}
		
		#language > .topics {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-items: center;
			align-items: stretch;
			justify-content: space-between;
		}

		#language > .topics > .topic {
			width: 31%;
		}
	}
</style>

<svelte:head>
	<title>Parcours professionnel — Bruno Brise</title>
	<meta name="description" content="Parcours professionnel de Bruno Brito Semedo">
</svelte:head>

<div id="career">
	<h1 class="title-cover">
		<div class="title-cover-inner">Parcours
			<ul class="source">
				<li class="source-format">
					<a href="brunobritosemedo.pdf">
						<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Adobe Acrobat Reader icon</title><path d="M23.598 15.368c-.71-.76-2.164-1.197-4.224-1.197-1.1 0-2.375.11-3.76.37-.782-.77-1.562-1.67-2.307-2.72-.53-.74-.993-1.52-1.42-2.29.813-2.54 1.206-4.61 1.206-6.1 0-1.672-.603-3.416-2.34-3.416-.533 0-1.066.325-1.35.8-.783 1.408-.43 4.493.917 7.54-.503 1.52-1.035 2.973-1.7 4.605-.578 1.376-1.244 2.794-1.923 4.096C2.793 18.64.267 20.49.03 21.94c-.104.547.074 1.05.457 1.45.133.11.636.545 1.48.545 2.59 0 5.32-4.28 6.707-6.86 1.065-.36 2.13-.687 3.193-1.015 1.168-.323 2.34-.583 3.405-.765 2.735 2.504 5.146 2.9 6.358 2.9 1.492 0 2.024-.617 2.203-1.122.28-.65.07-1.37-.252-1.74l.02.04zm-1.385 1.054c-.104.544-.638.906-1.386.906-.21 0-.39-.037-.603-.072-1.36-.325-2.633-1.016-3.903-2.106 1.25-.214 2.31-.25 2.98-.25.74 0 1.38.032 1.81.144.49.106 1.27.435 1.095 1.38h.02zm-7.523-1.707c-.92.19-1.914.414-2.944.693-.816.223-1.666.474-2.52.77.463-.902.854-1.774 1.208-2.603.428-1.02.78-2.07 1.135-3.046.35.61.74 1.23 1.13 1.78.64.87 1.31 1.7 1.98 2.42v-.02zM10.04 1.23c.145-.29.43-.436.678-.436.745 0 .887.868.887 1.56 0 1.168-.354 2.942-.96 4.967-1.062-2.82-1.135-5.18-.603-6.09zM6.138 18.127C4.328 21.17 2.59 23.06 1.525 23.06c-.21 0-.387-.075-.53-.183-.214-.216-.32-.472-.248-.76.213-1.09 2.236-2.613 5.392-3.99z"></path></svg>
					</a>
				</li>
				<li class="source-format">
					<a
						href="https://www.linkedin.com/in/brunobritosemedo/"
						target="_blank" rel="noopener">
						<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
					</a>
				</li>
			</ul>
		</div>
	</h1>

	<div class="container">
		<div class="resume">
			<section id="experiences">
				<h2>Expérience</h2>
				<div class="experiences">
					{#each career.experiences as experience}
					<div class="experience">
						<div class="experience-organization-cover" style="background-image: url({experience.organization.cover})">
							<a href="{experience.organization.url}">
								<img class="logo" src="{experience.organization.logo}" alt="{experience.organization.name} logo">
							</a>
						</div>
						<div class="experience-jobs">
							{#each experience.jobs as job}
							<div class="experience-job">
								<p class="name">{job.name}</p>
								<p class="organization">{experience.organization.name} <span class="contract">{job.contract}</span></p>
								<p class="date">{job.date}{#if job.duration != ""} <span class="duration">{job.duration}</span>{/if}</p>
								{#if job.description != ""}
								<p class="description description-wrap">{@html job.description}</p>
								{/if}
							</div>
							{/each}
						</div>
					</div>
					{/each}
				</div>
			</section>
			<section id="education" class="educations">
				<h2>Formation</h2>
				<div class="educations">
					{#each career.educations as education}
					<div class="education">
						<div class="left">
							<a href="{education.organization.url}">
								<img class="logo" src="{education.organization.logo}" alt="{education.organization.name} logo">
							</a>
						</div>
						<div class="right">
							<p class="name">{education.topic.name}</p>
							<p class="organization">{education.name}</p>
							<p class="diploma"><span class="level">{education.topic.level}</span> <span class="info"><a class="info" href="{education.topic.url}">{education.topic.id}</a></span></p>
							<p class="date">{education.date}</p>
						</div>
					</div>
					{/each}
				</div>
			</section>
			<section id="license">
				<div class="educations">
					<h2>Licences et certifications</h2>	
					{#each career.licensesCertifications as licenseCertification}
					<div class="education">
						<img class="logo" src="{licenseCertification.organization.logo}" alt="{licenseCertification.organization.name} logo">
						<div class="right">
							<p class="name">{licenseCertification.topic.name}</p>
							<p class="organization">{licenseCertification.organization.name}</p>
							<p class="diploma"><a class="info" href="{licenseCertification.topic.url}">{licenseCertification.topic.id}</a></p>
							<p class="date">{licenseCertification.date}
								{#if licenseCertification.date_expiration != ""}
								<span class="expiration">Expire {licenseCertification.date_expiration}</span>
								{/if}
							</p>
						</div>
					</div>
					{/each}
				</div>
			</section>
			<section id="volunteer">	
				<div class="experiences">
					<h2>Expériences de bénévolat</h2>
					{#each career.volunteerExperiences as volunteerExperience}
					<div class="experience">
						<div class="experience-organization-cover" style="background-image: url({volunteerExperience.organization.cover})">
							<a href="{volunteerExperience.organization.url}">
								<img class="logo" src="{volunteerExperience.organization.logo}" alt="{volunteerExperience.organization.name} logo">
							</a>
						</div>
						<div class="experience-jobs">
							<div class="experience-job">
								<p class="name">{volunteerExperience.name}</p>
								<p class="organization">{volunteerExperience.organization.name} <span class="contract">{volunteerExperience.type}</span></p>
								<p class="date">{volunteerExperience.date}{#if volunteerExperience.duration != ""} <span class="duration">{volunteerExperience.duration}</span>{/if}</p>
								{#if volunteerExperience.description != ""}
								<p class="description description-wrap">{@html volunteerExperience.description}</p>
								{/if}
							</div>
						</div>
					</div>
					{/each}
				</div>
			</section>
			<section id="skill">
				<h2>Compétences</h2>
				<ul class="tag-caption">
					<li class="tag expert">Expert</li>
					<li class="tag advanced">Avancé</li>
					<li class="tag intermediate">Intermédiaire</li>
					<li class="tag novice">Néophyte</li>
					<li class="tag fundamental">Connaissances</li>
				</ul>
				<div class="skills">
					<ul class="tags">
						{#each career.skills as skill}
						{#if skill.name != "" && skill.slug != ""}
						<li class="tag level{skill.level} button">
							<a href="blog/tags/{skill.slug}">{skill.name}</a>
						</li>
						{/if}
						{/each}
					</ul>
				</div>
			</section>
			<section id="recommendation">		
				<h2>Recommendations</h2>
				<div class="recommendations">
					{#each career.recommendations as recommendation, i}
					<div id="recommendation-{i+1}" class="recommendation">
						<div class="top">
							<div class="left">
								<a href="{recommendation.person.url}">
									<img class="picture" src="{recommendation.person.picture}" alt="{recommendation.person.name} picture">
								</a>
							</div>
							<div class="right">
								<p class="name">{recommendation.person.name}</p>
								<p class="organization">{recommendation.organization.name} <span class="relationship">{recommendation.relationship.role} {#if recommendation.relationship.organization != recommendation.organization.name} de {recommendation.relationship.organization}{:else}au sein de la même entreprise{/if}</span></p>
								<p class="date">{recommendation.date}</p>
							</div>
						</div>
						{#if recommendation.description != ""}
						<div class="message">
							<p class="description description-wrap">{@html recommendation.content}</p>
						</div>
						{/if}
					</div>
					{/each}
				</div>
			</section>
			<section id="language">
				<h2>Langues</h2>
				<ul class="tag-caption">
					<li class="tag expert">Courant</li>
					<li class="tag advanced">Avancé</li>
					<li class="tag intermediate">Intermédiaire</li>
					<li class="tag novice">Élémentaire</li>
					<li class="tag fundamental">Débutant</li>
				</ul>
				<ul class="topics">
					{#each career.languages as language}
					<li class="topic level{language.level}">
						<span class="name">{language.name}</span>
					</li>
					{/each}
				</ul>
			</section>
			<section id="interest">
				<h2>Centres d’intérêt</h2>
				<ul class="topics">
					{#each career.interests as interest}
					{#if interest.url !== ""}
						<a href="{interest.url}" target="_blank" rel="noopener">
							<li class="topic">
								<span class="name">{interest.name}</span>
								<span class="description">{interest.description}</span>
							</li>
						</a>
					{:else}
						<li class="topic">
							<span class="name">{interest.name}</span>
							<span class="description">{interest.description}</span>
						</li>
					{/if}
					{/each}
				</ul>
			</section>
		</div>
	</div>
</div>
