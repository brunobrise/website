<style>
	footer {
		flex-shrink: 0;
		background-color: var(--black);
		color: var(--white);
		width: 100%;
		text-align: center;
		padding: 2em 0;
	}

	footer a {
		text-decoration: none;
	}

	footer a:hover {
		text-decoration: underline;
	}

	.footer-social-network {
		display: block;
	}

	.footer-inner:first-child {
		padding: 0  0 0 8px;
	}

	.footer-inner:last-child {
		padding: 0 8px 0 0;
	}

	.footer-inner {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: flex-start;
		align-content: center;
		justify-items: center;
		justify-content: center;
		margin: 1em auto;
		padding-top: 2em;
	}

	.footer-social-network {
		display: inline-block;
	}

	.footer-social-network :global(svg) {
		fill: var(--white);
		margin: 0 0.5em;
		width: 48px;
		height: 48px;
	}

	.footer-social-network :global(circle) {
		stroke: var(--white);
		stroke-width: 1;
	}

	.footer-copyright {
		color: var(--gray-light);
		padding: 1em 0;
	}

	@media screen and (min-width: 56em) {
		.footer-inner {
			flex-wrap: nowrap;
		}

		.footer-inner:after {
			clear: both;
			content: '';
			display: block;
			height: 0;
			visibility: hidden;
		}

		.footer-inner:first-child {
			padding: 0  0 0 24px;
		}

		.footer-inner:last-child {
			padding: 0 24px 0 0;
		}

		.footer-social-network :global(svg) {
			width: 24px;
			height: 24px;
			margin: 0 1em;
		}
	}
</style>

<script>
	import website from '../data/website.js';
</script>

<footer>
	<div class="container footer-inner">
		<ul class="footer-social-networks">
			{#each website.social.networks as network}
			<li class="footer-social-network"><a href="{network.url}" target="_blank" rel="noopener" aria-label="{network.name}">{@html network.svg}</a></li>
			{/each}
		</ul>
	</div>
	<div class="footer-secondary">
		<p class="footer-copyright">Bruno Brito Semedo | 2020 © Tous droits réservés</p>
	</div>
</footer>
