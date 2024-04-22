<script lang="ts">
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import QuizOption from '$lib/components/quiz/option.svelte';

	export let sleepHour: string;
	export let step: number;

	function prev() {
		step -= 1;
	}

	function next() {
		step += 1;
	}

	function set(value: string) {
		if (value === sleepHour) sleepHour = '';
		else sleepHour = value;
	}

	const list = ['9-11 Malam', '11-1 Pagi', '1-3 Pagi', 'Lebih dari jam 3 Pagi'];

	$: nextFn = sleepHour ? next : undefined;
</script>

<QuizWrapper
	title="Gaya Hidup"
	titleState="Pertanyaan 3/5"
	question="Biasanya Kamu tidur jam berapa?"
	{prev}
	next={nextFn}
>
	<div class="option-wrapper">
		{#each list as item}
			<div class="options">
				<QuizOption onClick={() => set(item)} selected={sleepHour === item}>
					<div class="label">{item}</div>
				</QuizOption>
			</div>
		{/each}
	</div>
</QuizWrapper>

<style>
	.option-wrapper {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 28px;
		align-items: flex-start;
		justify-content: center;
		max-width: 920px;
		margin: 0 auto;
	}

	.options {
		position: relative;
		width: 40%;
		margin: 0 auto;
	}

	.label {
		max-width: 80%;
		font-size: 18px;
		text-align: center;
	}

	@media (min-width: 685px) {
		.options {
			width: 20%;
		}
	}

	@media (min-width: 1024px) {
		.label {
			font-size: 28px;
		}
	}
</style>
