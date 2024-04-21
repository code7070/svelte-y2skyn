<script lang="ts">
	export let onClick = () => {};
	export let link = '';
	export let disabled: boolean = false;
	export let type: 'button' | 'submit' = 'button';
</script>

<div class="btnArea" aria-disabled={disabled ? 'true' : 'false'}>
	<div class="diamond" />
	<div class="diamond" />
	{#if link}
		<a href={link} class="button"><slot /></a>
	{:else}
		<button {type} class="button" on:click={onClick}><slot /></button>
	{/if}
</div>

<style>
	.btnArea {
		position: relative;

		border-radius: 999px;
		transition: 0.15s ease-in-out;
	}

	.btnArea:active {
		transform: scale(0.93);
	}

	.btnArea .button {
		position: relative;
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: rgba(174, 174, 174, 0.4);
		border-radius: 999px;
		font-size: 16px;
		padding: 20px 30px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-weight: 500;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
	}

	.btnArea .diamond {
		position: absolute;
		width: 20px;
		height: 20px;
		top: 50%;
		transform: translate(0, -50%) rotate(45deg);
		border: 1px solid #fff;
		background: rgba(255, 255, 255, 1);
		z-index: 1;
	}

	.btnArea .diamond:nth-child(1) {
		left: -7px;
	}
	.btnArea .diamond:nth-child(2) {
		right: -7px;
	}

	.btnArea[aria-disabled='true'] {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}

	@media (min-width: 768px) {
		.btnArea .button {
			font-size: 24px;
			height: 65px;
			padding: 30px 40px;
		}
	}
</style>
