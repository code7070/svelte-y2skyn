<script lang="ts">
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import QuizOption from '$lib/components/quiz/option.svelte';

	export let isTravelling: string;
	export let step: number;

	function prev() {
		step -= 1;
	}

	function next() {
		step += 1;
	}

	function set(value: string) {
		if (value === isTravelling) isTravelling = '';
		else isTravelling = value;
	}

	$: nextFn = isTravelling ? next : undefined;
</script>

<QuizWrapper
	title="Gaya Hidup"
	titleState="Pertanyaan 2/5"
	question="Apakah Kamu akhir-akhir ini melakukan travelling?"
	{prev}
	next={nextFn}
>
	<div class="option-wrapper">
		<div class="options">
			<QuizOption onClick={() => set('yes')} selected={isTravelling === 'yes'}>
				<div class="label">Ya</div>
			</QuizOption>
		</div>
		<div class="options">
			<QuizOption onClick={() => set('no')} selected={isTravelling === 'no'}>
				<div class="label">Tidak</div>
			</QuizOption>
		</div>
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
		max-width: 720px;
		margin: 0 auto;
	}

	.options {
		position: relative;
		width: 40%;
	}

	.label {
		font-size: 20px;
	}

	@media (min-width: 685px) {
		.label {
			font-size: 40px;
		}
	}
</style>
