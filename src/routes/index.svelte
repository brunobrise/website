<style>
	#avatar {
		height: 110vh;
	}

	.avatar-image {
		width: 100%;
		height: 100%;
		background: url(cover.webp) no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		background-size: cover;
		position:relative;
	}

	#bio {
		text-align:left;
	}

	.pun {
		color: var(--gray);
	}

	section .container {
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.section-cover {
		display: flex;
		align-items: center;
	}

	.section-title {
		text-align: center;
	}

	.section-columns {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: stretch;
		margin: 0 auto;
	}

	.section-columns:first-child {
		border: none;
	}

	.section-column {
		padding: 0 24px;
		word-break: break-word;
	}

	.section-column p {
		margin-top:1em;
	}

	.section-column:first-child {
		margin-top:0;
	}

	.quote {
		display: flex;
		align-items: center;
		margin: 0 auto;
		padding: 1em 2em;
	}

	.quote a {
		text-decoration: none;
	}

	.quote-author-image {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		float: left;
		padding: 0 1em;
	}

	.quote-content {
		font-style: italic;
	}

	.quote-author {
		font-weight: bold;
	}

	#contact {
		background-color: var(--blue);
		color: var(--white);
		min-height: 50vh;
		text-align: center;
	}

	@media screen and (min-width:56em) {
		.container {
			padding: 0 24px;
			max-width: 56em;
			margin:0 auto;
		}

		.section-title {
			padding: 0 24px;
		}

		.section-columns {
			flex-wrap: nowrap;
			padding:1.5em 0;
		}

		.section-column {
			padding: 1em;
			max-width: 47%;
			border-right: 1px solid var(--white-whisper);
		}

		.section-column:last-child {
			border: none;
		}

		.quote {
			max-width:50vw;
		}
	}
</style>

<svelte:head>
	<title>Bruno Brise</title>
</svelte:head>

<section id="avatar">
	<div class="avatar-image"></div>
</section>

<section id="bio">
	<div class="section-inner container">
		<h2 class="section-title">Quelques mots à mon sujet</h2>
		<div class="section-columns">
			<div class="section-column">
				<p>Bruno Bri<span class="pun">to</span> Se<span class="pun">medo</span> est un ingénieur Cloud œuvrant à l'accélération de la performance technologique des entreprises via les pratiques DevOps.</p>
				<p>Il travaille actuellement avec <a href="http://wynd.eu" target="_blank" rel="noopener">Wynd, éditeur de logiciel développant une plateforme de commerce unifié</a> qui a sécurisé un investissment total de 112M€ en 2020. Startup au sein de laquelle il participe à l'extension de la plateforme ainsi qu'au maintien de la haute disponibilité.</p>
				<p>Bruno propose également de mettre à votre service ses 12 années d'expériences professionnelles. L'architecture et la maintenance de votre infrastructure sur les plateformes Cloud (AWS, GCP, Azure) à l'aide d'outils d'Infrastructure as Code. Il propose aussi le développement logiciel sous forme d'API, interfaces web et applications mobiles en respectant les <a href="https://agilemanifesto.org/" target="_blank" rel="noopener">méthodes Agile</a>, <a href="https://12factor.net/" target="_blank" rel="noopener">Twelve-Factor</a> ou encore <a href="https://blog.cleancoder.com/" target="_blank" rel="noopener">Clean Code</a> (TDD).</p>
			</div>
			<div class="section-column">
				<p>Entrepreneur dynamique, Bruno développe des produits répondant à des problématiques aussi diverses et variées que celles liées à l'accessibilité, l'isolement social, l'image de marque personnelle, la mise en relation, l'émancipation de soi. Il adhère fortement à l'idée que la technologie est un facteur de développement humain. L'automatisation des tâches chronophages ainsi qu'à faible valeur cognitive est son leitmotiv.</p>
				<p>Dans son rôle d'intervenant au sein d'associations telles que 100 000 entrepreneurs, il prône l'accompagnement des plus jeunes dans leurs actions entrepreneuriales. Cette activité créative associée à une recherche méthodique d'informations est essentielle à l'élaboration de cadres de travail productifs.</p>
				<p>Bruno Brise est la manifestation du désir d'exploration étendue de son créateur.</p>
			</div>
		</div>
		<div class="quote">
			<a href="https://www.hanselman.com/" target="_blank" rel="noopener">
				<img class="quote-author-image" src="people-scott-hanselman.jpg" alt="Photo de Scott Hanselman">
				<p class="quote-content">«&nbsp;L'automatisation est le plus puissant des outils dont nous disposons en tant que développeurs.&nbsp;»&nbsp;—&nbsp;<span class="quote-author">Scott Hanselman</span></p>
			</a>
		</div>
	</div>
</section>

<section id="contact" class="section-cover">
	<div class="container section-inner">
		<h2 class="section-title">Pour une infrastructure élastique.<br>Supervision, haute disponibilité et scalabilité.</h2>
		<a class="button" href="mailto:bonjour@brunobrise.com?subject=Prise%20de%20contact&body=Bonjour Bruno,">ME CONTACTER</a>
	</div>
</section>
