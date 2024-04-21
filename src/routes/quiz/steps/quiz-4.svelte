<script lang="ts">
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import QuizOption from '$lib/components/quiz/option.svelte';

	export let step: number;
	export let destiny: string;

	function prev() {
		step = 3;
	}

	const options = ['Money', 'Love', 'Stress-Free', 'Positivity', 'Grounding', 'Growth'];
	const optRow1 = options.slice(0, 3);
	const optRow2 = options.slice(3, 6);

	function click(value: string) {
		if (destiny === value) value = '';
		else destiny = value;
	}

	$: nextFn = () => (step = 5);
</script>

<QuizWrapper
	title="Tentang Diri"
	titleState="Pertanyaan 4/5"
	question="Apa yang ingin Kamu wujudkan akhir-akhir ini?"
	next={nextFn}
	{prev}
>
	<div class="option-wrapper">
		{#each optRow1 as option, index (option)}
			<QuizOption onClick={() => click(option)} selected={destiny === option}>
				{option}
			</QuizOption>
		{/each}
		<br />
		{#each optRow2 as option, index (option)}
			<QuizOption onClick={() => click(option)} selected={destiny === option}>
				{option}
			</QuizOption>
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
	}
</style>
