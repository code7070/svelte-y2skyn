<script lang="ts">
	import ButtonDiamond from '$lib/components/button/diamond/index.svelte';

	export let title: string;
	export let titleState: string;
	export let question: string;
	export let questionSize: 'default' | 'mini' = 'default';
	export let prev: false | (() => void) = false;
	export let next: false | (() => void) = false;

	$: clickPrev = typeof prev === 'function' ? prev : undefined;
	$: clickNext = typeof next === 'function' ? next : undefined;
</script>

<div class="quiz-wrapper">
	<div class="content">
		<div class="head">
			<div class="title">
				<span>{title}</span>
				<span>.</span>
				<span>{titleState}</span>
			</div>
			{#if question}
				<div class={`question ${questionSize}`}>{question}</div>
			{/if}
		</div>
		<div>
			<slot />
		</div>
		<div class="actions">
			{#if prev}
				<ButtonDiamond onClick={clickPrev} disabled={!prev}>
					<div>Sebelumnya</div>
				</ButtonDiamond>
			{/if}
			<ButtonDiamond onClick={clickNext} disabled={!next}>
				<div>Selanjutnya</div>
			</ButtonDiamond>
		</div>
	</div>
</div>

<style>
	.quiz-wrapper {
		position: relative;
		color: #fff;
		text-align: center;
	}

	.content {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 60px;
	}

	.head {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.title {
		font-size: 20px;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.8);
	}

	.question {
		font-size: 40px;
		margin: 0 auto;
		max-width: 578px;
	}

	.question.mini {
		max-width: 460px;
	}

	.actions {
		display: flex;
		gap: 40px;
		justify-content: center;
		align-items: center;
	}
</style>
