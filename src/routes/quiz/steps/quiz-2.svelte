<script lang="ts">
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import InputBoxQuiz from '$lib/components/quiz/inputBoxQuiz.svelte';

	export let dob: string;
	export let step: number;

	$: dateValidated = dob.length === 10;

	function next1() {
		step = 2;
	}

	function prev2() {
		step = 1;
	}
</script>

<QuizWrapper
	title="Tentang Diri"
	titleState="Pertanyaan 2/5"
	question="Kapan Tanggal Lahirmu"
	next={dateValidated ? next2 : false}
	prev={prev2}
>
	<InputBoxQuiz bind:value={dob} placeholder="DD/MM/YYY" />
</QuizWrapper>
