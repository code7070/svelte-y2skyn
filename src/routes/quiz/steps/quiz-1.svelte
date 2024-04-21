<script lang="ts">
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import InputBoxQuiz from '$lib/components/quiz/inputBoxQuiz.svelte';

	export let name: string;
	export let step: number;

	$: nameValidated = name.length > 2;
	$: console.log({ name });

	function next1(e?: any) {
		if (e) e.preventDefault();
		step = 2;
	}
</script>

<form on:submit={nameValidated ? next1 : undefined}>
	<QuizWrapper
		title="Tentang Diri"
		titleState="Pertanyaan 1/5"
		questionSize="mini"
		question="Halo! Kami Y2SKYN, Kalau Kamu?"
		next={nameValidated ? next1 : false}
	>
		<InputBoxQuiz bind:value={name} placeholder="Nama" />
	</QuizWrapper>
</form>
