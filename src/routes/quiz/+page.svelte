<script lang="ts">
	import Logo from './logo.svelte';
	import Header from '$lib/components/header/quiz/index.svelte';
	import QuizSteps from './steps/index.svelte';
	import { scale } from 'svelte/transition';
	import { onDestroy, onMount } from 'svelte';

	let view = 'logo';
	let timer: number | undefined;

	onMount(() => {
		timer = setTimeout(() => {
			view = 'quiz';
		}, 2000);
	});

	onDestroy(() => {
		clearTimeout(timer);
	});
</script>

<div class="wrapper">
	<Logo view={`${view}`} />
	{#if view === 'quiz'}
		<Header />
	{/if}
	{#if view === 'quiz'}
		<div in:scale>
			<QuizSteps />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		width: 100vw;
		max-width: 100%;
	}
</style>
