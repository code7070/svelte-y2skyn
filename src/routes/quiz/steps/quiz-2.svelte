<script lang="ts">
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import InputBoxQuiz from '$lib/components/quiz/inputBoxQuiz.svelte';

	export let dob: string;
	export let step: number;

	$: dateValidated = dob.length === 10;

	function next2(e?: any) {
		if (e) e.preventDefault();
		step = 3;
	}

	function prev2() {
		step = 1;
	}
</script>

<form on:submit={dateValidated ? next2 : undefined}>
	<QuizWrapper
		title="Tentang Diri"
		titleState="Pertanyaan 2/5"
		question="Kapan Tanggal Lahirmu?"
		prev={prev2}
		next={dateValidated ? next2 : false}
	>
		<InputBoxQuiz bind:value={dob} placeholder="DD/MM/YYY" />
	</QuizWrapper>
</form>
