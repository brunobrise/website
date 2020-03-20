<script>
	import { fade } from 'svelte/transition'
	import website from '../data/website.js'

	export let segment;

	let body;
	let sidebar_show;
	function sidebarToggle() {
		sidebar_show = !sidebar_show;
	}
</script>

<style>
	a, a:hover {
		text-decoration: none;
	}

	.header, .sidebar {
		position: absolute;
		top:0;
		left:0;
		width: 100vw;		
		font-family: var(--font-family-header);
		font-size: 16px;
		font-weight: 600;
		width: 100%;
		z-index: 50;
	}

	/* clearfix */
	.header::after, .sidebar::after, ul::after {
		content: '';
		display: block;
		clear: both;
	}

	.header-nav {
		display: none;
		margin-left: auto;
		align-items: center;
	}

	.header-nav-inner {
		margin: 0;
		padding: 0;
		width:100%
	}

	.header-nav-item, .sidebar-nav-item {
		display: block;
		float: left;
		font-size: 1em;
		text-transform: uppercase;
	}

	.header-nav-item {
		padding: 0.5em;
	}

	.header-nav-item:hover {
		color: var(--silver);
		animation-name: color-change-black-to-silver;
		animation-duration: 350ms;
	}
	

	.header-inner, .sidebar-inner {
		display: flex;
		box-sizing: border-box;
		padding: 1em 1em 0;
	}

	.header-title, .sidebar-title {
		padding: 0.3em;
		border: 2px solid var(--black);
		border-radius: 5px;
	}

	.header-branding, .sidebar-branding {
		color: var(--black);
		font-size: 1em;
		font-weight: bolder;
		text-align: left;
		-webkit-box-pack: start;
		-webkit-font-smoothing: subpixel-antialiased;
		justify-content: flex-start;
		flex: 1 1 auto;
		min-width: 0;
		max-width: 100%;
	}

	.header-branding:hover, .sidebar-branding:hover {
		color: #00000055;
	}

	.header-branding-sub, .sidebar-branding-sub {
		color: #00000055;
	}

	.header-branding-sub:hover, .sidebar-branding-sub:hover {
		color: var(--black);
	}

	.header-branding:hover, .sidebar-branding:hover {
		animation-name: none;
	}

	.sidebar {
		position: fixed;
		top:0;
		left:0;
		height:100vh;
		width:100vw;
		background-color: var(--white);
		z-index:99;
		overflow:hidden;
	}

	.sidebar-branding:hover {
		flex: 1 1 auto;
		min-width: 0;
		max-width: 100%;
	}

	.sidebar-open {
		margin-top:0.25em;
		margin-left: auto;
		display: block;
		font-size: 1.5em;
		float: right;
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1.5em;
		width: 75vw;
		margin:0 auto;
	}

	.sidebar-nav .button {
		margin-top:1em;
		border-radius: 5px;
		border: 3px solid var(--gray-dark)
	}

	.sidebar-nav-item {
		float: right;
		margin: 0.5em 0;
		margin: 0.5em 12px;
		width:65%;
		text-align: right;
	}

	.sidebar-open > button, .sidebar-close > button {
		padding: 0;
		outline: none;
		border: none;
		background-color: transparent;
		font-size: 1em;
		cursor: pointer;
		-webkit-appearance: button;
	}

	.sidebar-close {
		margin-top:-0.2em;
		margin-left: auto;
		font-size: 2.5em;
	}

	[aria-current] {
		font-weight: 500;
		border-bottom: 1px solid var(--red);
	}

	[aria-current]:hover {
		color: var(--red);
	}

	@media screen and (min-width: 72em) {
		.header-inner, .sidebar-inner {
			padding-left: 40px;
			padding-right: 40px;
		}

		.header-nav {
			display: block;
		}

		.sidebar-open {
			display: none;
		}
	}
</style>

<svelte:head>
   {#if sidebar_show}
      <style>
         body {
            overflow: hidden;
         }
      </style>
   {/if}
</svelte:head>

{#if sidebar_show}
<sidebar class="sidebar" transition:fade ={{duration: 500, opacity: 1}}>
	<nav class="sidebar-inner">
		<div class="sidebar-title">
			<a class="sidebar-branding" href='.'>Bruno<br><span class="sidebar-branding-sub">BriSe.</span></a>
		</div>
		<div class="sidebar-separator"></div>
		<nav class="sidebar-close">
			<button on:click={sidebarToggle}>&times;</button>
		</nav>
	</nav>
	<nav class="sidebar-nav">
		<ul class="sidebar-nav-inner">
			{#each website.navigation as item}
			{#if item.location.includes('sidebar')}
			<li class="sidebar-nav-item" aria-current='{segment === item.slug ? "page" : undefined}'>
				<a
					rel=prefetch
					href='{item.slug}'
					on:click={sidebarToggle}>{item.name}</a>
			</li>
			{/if}
			{/each}
		</ul>
		<a class="button" href="mailto:bonjour@brunobrise.com?subject=Prise%20de%20contact&body=Bonjour Bruno," on:click={sidebarToggle}>ME CONTACTER</a>
	</nav>
</sidebar>
{/if}

<header class="header">
	<div class="header-inner">
		<div class="header-title">
			<a class="header-branding" href='.'>Bruno<br><span class="header-branding-sub">BriSe.</span></a>
		</div>
		<nav class="sidebar-open">
			<button on:click={sidebarToggle}>&#9776;</button>
		</nav>
		<div class="header-separator"></div>
		<nav class="header-nav">
			<ul class="header-nav-inner">
				{#each website.navigation as item}
				{#if item.location.includes('header')}
				<li class="header-nav-item" aria-current='{segment === item.slug ? "page" : undefined}'>
					<a
						rel=prefetch
						class="header-nav-item-link"
						href='{item.slug}'>{item.name}</a>
					</li>
				{/if}
				{/each}
			</ul>
		</nav>
	</div>
</header>
