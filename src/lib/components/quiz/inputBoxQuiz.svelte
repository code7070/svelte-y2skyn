<script>
	export let type = 'text';
	export let value = '';
	export let placeholder = '';
	const typeWorkaround = (node) => (node.type = type);
</script>

<div class="input-wrapper">
	<input use:typeWorkaround bind:value {placeholder} />
</div>

<style>
	.input-wrapper {
		position: relative;
		margin: 0 auto;
	}

	.input-wrapper::before,
	.input-wrapper::after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0) rotate(45deg);
		background: rgb(255, 255, 255, 1);
		border: 1px solid #fff;
	}

	.input-wrapper::before {
		top: 0;
	}

	.input-wrapper::after {
		bottom: 0;
	}

	.input-wrapper input {
		margin: 0 auto;
		display: block;
		min-width: 400px;
		max-width: 520px;
		border: 1px solid #fff;
		border-left: transparent;
		border-right: transparent;
		background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0.01) 8%,
			rgba(255, 255, 255, 0.3) 50%,
			rgba(255, 255, 255, 0.01) 100%
		);
		height: 88px;
		font-size: 40px;
		font-weight: 500;
		text-align: center;
		color: inherit;
		outline: transparent;
	}

	.input-wrapper input::placeholder {
		color: inherit;
		opacity: 0.7;
	}
</style>
