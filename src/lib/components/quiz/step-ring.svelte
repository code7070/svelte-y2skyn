<script lang="ts">
	export let step: number;
	export let length: number;

	const arrs = Array.from(Array(length).keys());
</script>

<div class="step-ring" aria-details={`${step}`}>
	<div class="inner">
		{#each arrs as item}
			<div class="diamond" aria-details={step >= item + 1 ? 'active' : ''} />
		{/each}
	</div>
</div>
<div>{step}</div>

<style>
	@keyframes downing {
		from {
			width: 90%;
			transform: translate(-50%, -122.5%);
		}
		to {
			width: 90%;
			transform: translate(-50%, -50%);
		}
	}

	.step-ring {
		--posY: -200%;
		position: fixed;
		left: 50%;
		top: 50%;
		width: 90%;
		aspect-ratio: 1/1;
		border: 1.4px solid rgba(255, 255, 255, 0.5);
		border-radius: 99999px;
		transform: translate(-50%, var(--posY));
		transition: 0.25s ease-in;
		/* animation: downing 1s linear 1 forwards; */
	}

	.step-ring[aria-details='1'] {
		transform: translate(-50%, var(--posY)) rotate(calc(0 * 45deg));
	}

	.step-ring[aria-details='2'] {
		transform: translate(-50%, var(--posY)) rotate(calc(1 * 45deg));
	}

	.step-ring[aria-details='3'] {
		transform: translate(-50%, var(--posY)) rotate(calc(2 * 45deg));
	}

	.step-ring[aria-details='4'] {
		transform: translate(-50%, var(--posY)) rotate(calc(3 * 45deg));
	}

	.step-ring[aria-details='5'] {
		transform: translate(-50%, var(--posY)) rotate(calc(4 * 45deg));
	}

	.step-ring[aria-details='6'] {
		transform: translate(-50%, var(--posY)) rotate(calc(5 * 45deg));
	}

	.step-ring[aria-details='7'] {
		transform: translate(-50%, var(--posY)) rotate(calc(6 * 45deg));
	}

	.step-ring[aria-details='8'] {
		transform: translate(-50%, -122.5%) rotate(calc(7 * 45deg));
	}

	.inner {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.diamond {
		position: absolute;
		width: 10px;
		aspect-ratio: 1/1;
		background-color: #fff;
		position: absolute;
		opacity: 0;
	}

	.diamond[aria-details='active'] {
		opacity: 100%;
	}

	.diamond:nth-child(5) {
		top: 0;
		left: 50%;
		transform: translate(-50%, 0) rotate(45deg);
	}

	.diamond:nth-child(4) {
		top: 15%;
		right: 14%;
		transform: translate(0, 0) rotate(45deg);
	}

	.diamond:nth-child(3) {
		top: 50%;
		right: 0%;
		transform: translate(0%, -50%) rotate(45deg);
	}

	.diamond:nth-child(2) {
		bottom: 15%;
		right: 14%;
		transform: translate(0, 0) rotate(45deg);
	}

	.diamond:nth-child(1) {
		bottom: 0%;
		left: 50%;
		transform: translate(-50%, 0%) rotate(45deg);
	}

	.diamond:nth-child(8) {
		bottom: 15%;
		left: 14%;
		transform: translate(0, 0) rotate(45deg);
	}

	.diamond:nth-child(7) {
		top: 50%;
		left: 0%;
		transform: translate(0%, -50%) rotate(45deg);
	}

	.diamond:nth-child(6) {
		top: 15%;
		left: 14%;
		transform: translate(0, 0) rotate(45deg);
	}
</style>
