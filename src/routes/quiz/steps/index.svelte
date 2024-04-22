<script lang="ts">
	import { fade } from 'svelte/transition';
	import Quiz_1 from './quiz-1.svelte';
	import Quiz_2 from './quiz-2.svelte';
	import Quiz_3 from './quiz-3.svelte';
	import Quiz_4 from './quiz-4.svelte';
	import Quiz_5 from './quiz-5.svelte';
	import Quiz_6 from './quiz-6.svelte';
	import Quiz_7 from './quiz-7.svelte';
	import Quiz_8 from './quiz-8.svelte';
	import StepRing from '$lib/components/quiz/step-ring.svelte';

	let step = 1;

	let form = {
		name: '',
		dob: '',
		zodiac: '',
		destiny: '',
		crystal: '',
		personType: '',
		isTravelling: '',
		sleepHour: ''
	};

	let quizLength = Object.keys(form).length;
</script>

<StepRing bind:length={quizLength} bind:step />

<div in:fade={{ delay: 150 }} style="position: relative;">
	{#if step === 1}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
			<Quiz_1 bind:name={form.name} bind:step />
		</div>
	{:else if step === 2}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
			<Quiz_2 bind:dob={form.dob} bind:step />
		</div>
	{:else if step === 3}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
			<Quiz_3 bind:zodiac={form.zodiac} bind:step />
		</div>
	{:else if step === 4}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
			<Quiz_4 bind:destiny={form.destiny} bind:step />
		</div>
	{:else if step === 5}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
			<Quiz_5 bind:crystal={form.crystal} bind:step />
		</div>
	{:else if step === 6}
		<div>
			<Quiz_6 bind:personType={form.personType} bind:step />
		</div>
	{:else if step === 7}
		<div>
			<Quiz_7 bind:isTravelling={form.personType} bind:step />
		</div>
	{:else if step === 8}
		<div>
			<Quiz_8 bind:sleepHour={form.sleepHour} bind:step />
		</div>
	{/if}
</div>
