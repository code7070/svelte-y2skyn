<script lang="ts">
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import QuizOption from '$lib/components/quiz/option.svelte';

	export let step: number;
	export let zodiac: string;

	function prev() {
		step = 2;
	}

	function next() {
		step = 4;
	}

	const options = [
		{ value: 'Fire', zodiacs: 'Aries, Leo, Sagitarius' },
		{ value: 'Earth', zodiacs: 'Taurus, Virgo, Capricorn' },
		{ value: 'Air', zodiacs: 'Gemini, Libra, Aquarius' },
		{ value: 'Water', zodiacs: 'Cancer, Scorpio, Pisces' }
	];

	function click(value: string) {
		if (zodiac === value) zodiac = '';
		else zodiac = value;
	}

	$: nextFn = zodiac ? next : undefined;
</script>

<QuizWrapper
	title="Tentang Diri"
	titleState="Pertanyaan 3/5"
	question="Apa Zodiac Sign Kamu?"
	next={nextFn}
	{prev}
>
	<div class="option-wrapper">
		{#each options as option, i}
			<div class="options">
				<QuizOption selected={zodiac === option.value} onClick={() => click(option.value)}
					>{option.value}</QuizOption
				>
				<div class="option-info">{option.zodiacs}</div>
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
	}

	.options {
		width: 40%;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.option-info {
		font-size: 16px;
		font-weight: 500;
		text-align: center;
	}

	@media (min-width: 685px) {
		.option-wrapper {
			flex-wrap: nowrap;
		}

		.options {
			width: 100%;
			flex: 1;
			gap: 32px;
		}

		.option-info {
			font-size: 24px;
		}
	}
</style>
