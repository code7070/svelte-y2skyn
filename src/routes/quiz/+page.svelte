<script>
	import Logo from './logo.svelte';
	let view = 'logo';
</script>

<div class="wrapper">
	{#if view === 'logo'}
		<Logo />
	{/if}
</div>

<style>
	.wrapper {
		width: 100vw;
		height: 100vh;
	}
</style>
