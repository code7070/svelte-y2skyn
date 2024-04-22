<script lang="ts">
	import Logo from './logo.svelte';
	import Header from '$lib/components/header/quiz/index.svelte';
	import QuizSteps from './steps/index.svelte';
	// import { scale } from 'svelte/transition';
	// import { onDestroy, onMount } from 'svelte';

	let view = 'logo';
	let timer: number | undefined;

	let loaded = false;

	if (loaded) {
		timer = setTimeout(() => {
			view = 'quiz';
			clearTimeout(timer);
		}, 2000);
	}
</script>

<div class="wrapper">
	<Logo view={`${view}`} bind:loaded />
	{#if view === 'quiz'}
		<Header />
	{/if}
	{#if view === 'quiz'}
		<QuizSteps />
	{/if}
</div>

<style>
	.wrapper {
		width: 100vw;
		max-width: 100%;
	}
</style>
