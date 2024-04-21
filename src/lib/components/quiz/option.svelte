<script lang="ts">
	export let onClick = () => {};
	export let selected = false;
</script>

<button on:click={onClick} class="quiz-option">
	<slot></slot>
</button>

<style>
	.quiz-option {
		position: relative;
		border-radius: 9999px;
		width: 240px;
		aspect-ratio: 1/1;
		background: rgba(245, 245, 245, 0.24);
		border: 1px solid #fff;
		filter: blur();
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32px;
		font-weight: 500;
		color: #fff;
	}
</style>
