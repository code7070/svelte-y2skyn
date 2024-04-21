<script lang="ts">
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import InputBoxQuiz from '$lib/components/quiz/inputBoxQuiz.svelte';

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
	Hehehehe: {zodiac}
</QuizWrapper>
