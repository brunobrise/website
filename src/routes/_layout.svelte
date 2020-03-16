<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount} from 'svelte';

	export let segment;

	let gotop;

	function scrollFunction() {
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			gotop.style.display = "block";
		} else {
			gotop.style.display = "none";
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction(event) {
		event.preventDefault();
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	function scrollToTop() {
		var position = document.body.scrollTop || document.documentElement.scrollTop;
		if (position){
			window.scrollBy(0,-Math.max(10, Math.floor(position / 10)));
			requestAnimationFrame(scrollToTop);
		}
		else clearTimeout(scrollAnimation);
	}

	onMount(()=> {
		// When the user scrolls down 200px from the top of the document, show the button
		window.onscroll = function() {scrollFunction()};
	});
</script>

<style>
	main {
		box-sizing: border-box;
		flex: 1 0 auto;
	}

	#gotop {
		display: none;
		cursor: pointer;
		position: fixed;
		bottom: 1em;
		right: 1em;
		width: 2em;
		height: 2em;
		border: 2px solid var(--blue-transparent);
		color: var(--gray);
		background-color: var(--white-transparent);
		align-items: center;
		text-align: center;
		font-weight: 900;
		font-size: 1.6em;
		line-height: 1.8em;
	}
</style>

<Header {segment}/>

<main>
	<slot></slot>
</main>

<Footer />

<div bind:this={gotop} id="gotop" on:click={scrollToTop}>↑</div>