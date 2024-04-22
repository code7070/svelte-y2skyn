<script lang="ts">
	export let step: number;
	export let length: number;

	const arrs = Array.from(Array(length).keys());

	$: console.log({ step });
</script>

<div class="step-ring" aria-details={`${step}`}>
	<div class="inner">
		{#each arrs as item}
			<div class="diamond" aria-details={step >= item + 1 ? 'active' : ''} />
		{/each}
	</div>
</div>
<div>{step}</div>

<div class="wording" aria-details={`${step}`}>
	<div>
		Sedikit lagi, kita sudah<br />
		hampir aja kerja bareng.<br />
		Hope i work for the<br />great <span class="natuno">natuno</span>.
	</div>
	<div>Hope u like this as a proof<br />Tipis-tipis la hehe ;)</div>
</div>

<style>
	:root {
		--width: 90%;
		--posY: -200%;
	}

	.natuno {
		background-color: #ff642b;
		color: #fff;
		padding: 1px;
	}

	.wording {
		position: fixed;
		left: 50%;
		top: 50%;
		width: 80%;
		transform: translate(-50%, -50%) scale(0.5);
		text-align: center;
		display: flex;
		flex-direction: column;
		font-size: 20px;
		gap: 20px;
		line-height: 130%;

		opacity: 0;
		pointer-events: none;

		transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transition-delay: 1s;
	}

	.wording[aria-details='9'] {
		opacity: 100%;
		transform: translate(-50%, -50%) scale(1);
	}

	@media (min-width: 720px) {
		.wording {
			font-size: 40px;
			gap: 40px;
		}
	}

	@keyframes downing {
		from {
			width: var(--width);
			transform: translate(-50%, -122.5%);
		}
		to {
			width: var(--width);
			transform: translate(-50%, -50%);
		}
	}

	.step-ring {
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

	.step-ring[aria-details='9'] {
		animation: downing 1s linear 1 forwards;
	}

	@media (min-width: 768px) {
		.step-ring {
			--posY: -135%;
			--width: 65%;
		}
	}

	@media (min-width: 920px) {
		.step-ring {
			--posY: -122.5%;
			--width: 45%;
		}
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
		transform: translate(-50%, var(--posY)) rotate(calc(7 * 45deg));
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
