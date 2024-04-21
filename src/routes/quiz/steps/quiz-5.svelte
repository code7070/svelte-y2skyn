<script lang="ts">
	import QuizWrapper from '$lib/components/quiz/wrapper.svelte';
	import QuizOption from '$lib/components/quiz/option.svelte';

	import greenjade from '$lib/assets/quiz/crystals/green-jade.webp';
	import amethys from '$lib/assets/quiz/crystals/amethyst.webp';
	import rosequartz from '$lib/assets/quiz/crystals/rose-quartz.webp';
	import clearquartz from '$lib/assets/quiz/crystals/clear-quartz.webp';
	import blueagate from '$lib/assets/quiz/crystals/blue-agate.webp';
	import tigereye from '$lib/assets/quiz/crystals/tiger-eye.webp';

	export let step: number;
	export let crystal: string;

	const options = [
		{ name: 'Green Jade', image: greenjade },
		{ name: 'Amethys', image: amethys },
		{ name: 'Rose Quartz', image: rosequartz },
		{ name: 'Clear Quartz', image: clearquartz },
		{ name: 'Blue Agate', image: blueagate },
		{ name: 'Tiger Eye', image: tigereye }
	];

	const optRow1 = options.slice(0, 3);
	const optRow2 = options.slice(3, 6);

	function doNext() {
		step += 1;
	}

	function prev() {
		step -= 1;
	}

	function setValue(value: string) {
		if (crystal === value) crystal = '';
		else crystal = value;
	}

	$: nextFn = crystal ? doNext : undefined;
</script>

<QuizWrapper
	title="Tentang Diri"
	titleState="Pertanyaan 5/5"
	question="Kristal apa yang membuat Kamu tertarik?"
	next={nextFn}
	{prev}
>
	<div class="option-wrapper">
		{#each optRow1 as option, index (option)}
			<QuizOption onClick={() => setValue(option.name)} selected={crystal === option.name}>
				<div>
					<img alt={option.name} title={option.name} src={option.image} />
					<br />
					{option.name}
				</div>
			</QuizOption>
		{/each}
		<br />
		{#each optRow2 as option, index (option)}
			<QuizOption onClick={() => setValue(option.name)} selected={crystal === option.name}>
				<div>
					<img alt={option.name} title={option.name} src={option.image} />
					<br />
					{option.name}
				</div>
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
