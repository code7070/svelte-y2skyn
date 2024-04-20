<script>
	import Logo from './logo.svelte';
	import Header from '$lib/components/header/quiz/index.svelte';
	let view = 'logo';
	let forms = {
		name: '',
		dob: '',
		zodiac: 0
	};
	setTimeout(() => {
		view = 'quiz';
	}, 3000);
</script>

<div class="wrapper">
	{#if view === 'logo'}
		<Logo />
	{/if}
	{#if view !== 'logo'}
		<Header />
	{/if}
</div>

<style>
	.wrapper {
		width: 100vw;
		max-width: 100%;
	}
</style>
