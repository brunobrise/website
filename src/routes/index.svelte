<style>
	.container {
		display: flex;
		flex-direction: column;
	}

	.fullname {
		font-size: 1.3em;
	}

	.role {
		/* text-align: right; */
		font-size: 2em;
	}

	.introduction {
		font-size: 1.2em;
		text-align: center;
		padding-left: 25%;
		text-align: left;
	}
		
	.container > .picture-wrapper {
		padding: 1em 0;
	}

	.container > .picture-wrapper > .picture {
		object-fit: cover;
		box-sizing: border-box;
		width:100%;
		height:100%;
	}

	.bio {
		font-size: 1em;
		text-align: left;
		text-align: justify;
	}

	@media screen and (min-width: 72em) {
		.container {
			overflow: hidden;
			height: 100vh;
			display: grid;

			grid-template-columns: [cfirst] repeat(5, [cleft] 8vw) [cmiddle] 4em repeat(5, [cright] 8vw) [clast];
			grid-template-rows: [rtop] repeat(15, [rstep] 6vh) auto [rbottom];

			align-items: stretch;
		}

		.container > .picture-wrapper {
			overflow: hidden;
			padding: 0;
			grid-area: rtop / cright 1 / rbottom / clast;
		}
		
		.container > .picture-wrapper > .picture {
			object-fit: cover;
			box-sizing: border-box;
			width:100%;
			height:100%;
		}

		.fullname {
			font-size: 1.3em;
			grid-column-start: cleft 1;
			grid-column-end: cleft 3;
			grid-row-start: rstep 3;
			grid-row-end: rstep 4;

			align-self: center;
		}

		.role {
			font-size: 2.2em;
			grid-column-start: cleft 3;
			grid-column-end: cmiddle;
			grid-row-start: rstep 3;
			grid-row-end: rstep 4;

			align-self: center;
		}

		.introduction {
			font-size: 2em;
			padding-left: 0;
			grid-column-start: cleft;
			grid-column-end: cmiddle;
			grid-row-start: rstep 4;
			grid-row-end: rstep 5;
		}

		.bio {
			grid-column-start: cleft 2;
			grid-column-end: cmiddle;
			grid-row-start: rstep 7;
		}
	}
</style>

<svelte:head>
</svelte:head>

<div class="container">
	<div class="fullname">
		<p>Bruno Brito Semedo</p>
	</div>
	<div class="role">
		<p>Ingénieur Cloud</p>
	</div>
	<div class="introduction">
		<p>Accélère la performance technologique des entreprises par les pratiques DevOps.</p>
	</div>
	<div class="picture-wrapper">
		<img class="picture" src="cover.webp" alt="Bruno Brito Semedo's picture"/>
	</div>
	<div id="bio-1" class="bio">
		<p>Bruno travaille actuellement avec <a href="http://wynd.eu" target="_blank" rel="noopener">Wynd, éditeur de logiciel développant une plateforme de commerce unifié</a> qui a sécurisé un investissment total de 112M€ en 2020. Startup au sein de laquelle il participe à l'extension de la plateforme ainsi qu'au maintien de la haute disponibilité.</p>
		<br><p>Il propose également de mettre à votre service ses 12 années d'expériences professionnelles. L'architecture et la maintenance de votre infrastructure sur les plateformes Cloud (AWS, GCP, Azure) à l'aide d'outils d'Infrastructure as Code. Il propose aussi le développement logiciel sous forme d'API, interfaces web et applications mobiles en respectant les <a href="https://agilemanifesto.org/" target="_blank" rel="noopener">méthodes Agile</a>, <a href="https://12factor.net/" target="_blank" rel="noopener">Twelve-Factor</a> ou encore <a href="https://blog.cleancoder.com/" target="_blank" rel="noopener">Clean Code</a> (TDD).</p>
		<br><p>Entrepreneur dynamique, Bruno développe des produits répondant à des problématiques aussi diverses et variées que celles liées à l'accessibilité, l'isolement social, l'image de marque personnelle, la mise en relation, l'émancipation de soi. Il adhère fortement à l'idée que la technologie est un facteur de développement humain. L'automatisation des tâches chronophages à faible valeur cognitive est son leitmotiv.</p>
		<!-- <p>Dans son rôle d'intervenant au sein d'associations telles que 100 000 entrepreneurs, il prône l'accompagnement des plus jeunes dans leurs actions entrepreneuriales. Cette activité créative associée à une recherche méthodique d'informations est essentielle à l'élaboration de cadres de travail productifs.</p> -->
		<!-- <p>Bruno Brise est la manifestation du désir d'exploration continue de son créateur.</p> -->
	</div>
</div>


<!-- <section id="contact" class="section-cover">
	<div class="container section-inner">
		<h2 class="section-title">Pour une infrastructure élastique.<br>Supervision, haute disponibilité et scalabilité.</h2>
		<a class="button" href="mailto:bonjour@brunobrise.com?subject=Prise%20de%20contact&body=Bonjour Bruno,">ME CONTACTER</a>
	</div>
</!-->
