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
				<div>{title}</div>
				<div class="round" />
				<div>{titleState}</div>
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
			<ButtonDiamond onClick={clickNext} disabled={!next} type="submit">
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
		max-width: 1024px;
		margin: 0 auto;
		margin-top: 100px;
	}

	.content {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.head {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.title {
		font-size: 16px;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.title .round {
		width: 5px;
		height: 5px;
		background-color: #fff;
		border-radius: 999px;
	}

	.question {
		font-size: 24px;
		margin: 0 auto;
		max-width: 578px;
		line-height: 130%;
	}

	.question.mini {
		max-width: 280px;
	}

	.actions {
		display: flex;
		gap: 40px;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 685px) {
		.quiz-wrapper {
			margin-top: 50px;
		}

		.title {
			font-size: 20px;
		}

		.head {
			gap: 32px;
		}

		.question {
			font-size: 40px;
		}

		.question.mini {
			max-width: 460px;
		}

		.content {
			gap: 60px;
		}
	}
</style>
