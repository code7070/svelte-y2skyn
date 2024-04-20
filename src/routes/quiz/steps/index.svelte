<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import InputBoxQuiz from '$lib/components/quiz/inputBoxQuiz.svelte';

	let step = 0;

	let form = {
		name: ''
	};

	function next1() {
		console.log('Next: ', form);
	}

	$: nameValidated = form.name.length > 2 || false;

	$: console.log(form);
</script>

{#if step === 0}
	<div in:scale out:fade>
		<QuizWrapper title="Tentang Diri" question="" next={nameValidated ? next1 : false}>
			<div class="question" style="margin-bottom: 60px; margin-top:-20px">
				Halo! Kami Y2SKYN,<br />Kalau kamu?
			</div>
			<InputBoxQuiz bind:value={form.name} placeholder="Nama" />
		</QuizWrapper>
	</div>
{/if}

<style>
	.question {
		font-size: 40px;
	}
</style>
