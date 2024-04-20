<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import InputBoxQuiz from '$lib/components/quiz/inputBoxQuiz.svelte';

	let step = 1;

	let form = {
		name: '',
		dob: ''
	};

	function next1() {
		console.log('Next: ', form);
		step = 2;
		console.log({ step });
	}

	function next2() {
		step = 3;
	}
	function prev2() {
		step = 1;
	}

	$: nameValidated = form.name.length > 2 || false;
	$: dateValidated = form.dob.length === 10;
</script>

<div out:scale in:fade>
	{#if step === 1}
		<QuizWrapper
			title="Tentang Diri"
			titleState="Pertanyaan 1/5"
			questionSize="mini"
			question="Halo! Kami Y2SKYN, Kalau Kamu?"
			next={nameValidated ? next1 : false}
		>
			<InputBoxQuiz bind:value={form.name} placeholder="Nama" />
		</QuizWrapper>
	{:else if step === 2}
		<QuizWrapper
			title="Tentang Diri"
			titleState="Pertanyaan 2/5"
			question="Kapan Tanggal Lahirmu"
			next={dateValidated ? next2 : false}
			prev={prev2}
		>
			<InputBoxQuiz bind:value={form.dob} placeholder="DD/MM/YYY" />
		</QuizWrapper>
	{/if}
</div>

<style>
	.question {
		font-size: 40px;
		max-width: 578px;
		margin: 0 auto;
	}
</style>
