<script lang="ts">
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import InputBoxQuiz from '$lib/components/quiz/inputBoxQuiz.svelte';
	import QuizOption from '$lib/components/quiz/option.svelte';

	export let step: number;
	export let zodiac: string;

	function prev() {
		step = 2;
	}

	function next() {
		step = 4;
	}
</script>

<QuizWrapper
	title="Tentang Diri"
	titleState="Pertanyaan 3/5"
	question="Apa Zodiac Sign Kamu?"
	{prev}
	{next}
>
	<div class="option-wrapper">
		<div class="options">
			<QuizOption>Fire</QuizOption>
			<div class="option-info">Aries, Leo, Sagitarius</div>
		</div>
		<div class="options">
			<QuizOption>Earth</QuizOption>
			<div class="option-info">Taurus, Virgo, Capricorn</div>
		</div>
		<div class="options">
			<QuizOption>Air</QuizOption>
			<div class="option-info">Gemini, Libra, Aquarius</div>
		</div>
		<div class="options">
			<QuizOption>Water</QuizOption>
			<div class="option-info">Cancer, Scorpio Pisces</div>
		</div>
	</div>
</QuizWrapper>

<style>
	.option-wrapper {
		position: relative;
		display: flex;
		/* flex-wrap: wrap; */
		gap: 28px;
		align-items: flex-start;
		justify-content: center;
	}

	.options {
		width: 243px;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.option-info {
		font-size: 24px;
		font-weight: 500;
		text-align: center;
	}
</style>
