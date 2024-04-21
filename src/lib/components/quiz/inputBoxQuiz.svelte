<script lang="ts">
	export let type: 'text' | 'password' | 'email' = 'text';
	export let value = '';
	export let placeholder = '';

	const typeAction = (node: any) => {
		node.type = type;
	};
</script>

<div class="input-wrapper">
	<input use:typeAction bind:value {placeholder} />
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
		width: 8px;
		aspect-ratio: 1/1;
	}

	.input-wrapper::before {
		top: -4.5px;
	}

	.input-wrapper::after {
		bottom: -4.5px;
	}

	.input-wrapper input {
		margin: 0 auto;
		display: block;
		min-width: 200px;
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
		height: 48px;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		color: inherit;
		outline: transparent;
	}

	.input-wrapper input::placeholder {
		color: inherit;
		opacity: 0.7;
	}

	@media (min-width: 685px) {
		.input-wrapper::before,
		.input-wrapper::after {
			width: 14px;
		}
		.input-wrapper::before {
			top: -8px;
		}

		.input-wrapper::after {
			bottom: -8px;
		}

		.input-wrapper input {
			font-size: 40px;
			height: 88px;
		}
	}
</style>
