<script lang="ts">
	export let onClick = () => {};
	export let selected: boolean = false;
</script>

<button on:click={onClick} class="quiz-option" aria-disabled={selected}>
	<slot></slot>
</button>

<style>
	.quiz-option {
		position: relative;
		border-radius: 9999px;
		/* width: 240px; */
		flex: 1;
		width: 100%;
		aspect-ratio: 1/1;
		background: rgba(245, 245, 245, 0.24);
		border: 1px solid #fff;
		filter: blur();
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		font-weight: 500;
		color: #fff;
		transition: 0.15s ease-in-out;
		box-shadow: 0 0 0px rgba(255, 255, 255, 0);
		-webkit-tap-highlight-color: transparent;
	}

	.quiz-option[aria-disabled='true'] {
		background: rgba(245, 245, 245, 0.6);
		box-shadow: 0 0 60px rgba(255, 255, 255, 0.6);
	}

	.quiz-option:active {
		transform: scale(0.9);
	}

	@media (min-width: 685px) {
		.quiz-option {
			font-size: 32px;
		}
	}
</style>
