<script>
	import Header from '../components/Header.svelte';

	export let segment;
</script>

<style>
	main {
		box-sizing: border-box;
		flex: 1 0 auto;
	}
</style>

<Header {segment}/>

<main>
	<slot></slot>
</main>