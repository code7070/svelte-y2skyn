<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import dome1 from '$lib/assets/intros/dome-1-low.webp';
	import dome2 from '$lib/assets/intros/dome-2-low.webp';
	import dome3 from '$lib/assets/intros/dome-3-low.webp';
	import dome4 from '$lib/assets/intros/dome-4-low.webp';
	import dome5 from '$lib/assets/intros/dome-5-low.webp';
	import dome6 from '$lib/assets/intros/dome-6-low.webp';
	import dome7 from '$lib/assets/intros/dome-7-low.webp';
	import ButtonDiamond from '$lib/components/button/diamond/index.svelte';

	const domes = [dome1, dome2, dome3, dome4, dome5, dome6, dome7];

	let index = 0;
	let view = 'circle';
	let cint: ReturnType<typeof setInterval>;

	function updater() {
		cint = setInterval(() => {
			if (index < 7) {
				index += 1;
				view = `dome-${index}`;
			} else {
				// index = 0;
				clearInterval(cint);
			}
		}, 2000);
	}

	onMount(() => {
		setTimeout(updater, 1500);
	});

	onDestroy(() => {
		clearInterval(cint);
	});
</script>

<main aria-details={`${index}`}>
	<div class="circle" />
	{#each domes as dome, i}
		<div class="imgDome" aria-details={`${i + 1}`} aria-current={index === i + 1}>
			<div class="inner">
				<img alt={`dome-${i}`} src={dome} />
			</div>
		</div>
	{/each}
	<div class="buttonArea">
		<ButtonDiamond link="/quiz">Skip Intro</ButtonDiamond>
	</div>
</main>

<style>
	main {
		position: relative;
		min-height: 100vh;
		background: #161616;
		overflow-x: hidden;
	}

	main[aria-details='2'] {
		background: #538b55;
	}

	main[aria-details='3'] {
		background: #6e2fa0;
	}

	main[aria-details='4'] {
		background: #e1988b;
	}

	main[aria-details='5'] {
		background: #c1ddff;
	}

	main[aria-details='6'] {
		background: #2b64c0;
	}

	main[aria-details='7'] {
		background: #c47200;
	}

	@property --p {
		syntax: '<color>';
		inherits: false;
		initial-value: transparent;
	}

	@keyframes animateCircle {
		from {
			--p: transparent;
			width: 100px;
		}
		to {
			--p: #fff;
			width: 220px;
		}
	}

	.circle {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 100px;
		aspect-ratio: 1/1;
		transform: translate(-50%, -50%);
		background: radial-gradient(var(--p) 5%, transparent 30%);
		border-radius: 50%;
		animation: animateCircle 1s linear 1 forwards;
		transition: --p 1s linear;
	}

	.imgDome {
		position: absolute;
		top: 50%;
		transform: translate(0%, -50%);
		width: 100%;
		object-fit: cover;
		display: block;
		transition: 0.5s ease-in-out;
	}

	.imgDome .inner {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.imgDome img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		opacity: 0;
	}

	.imgDome[aria-current='true'] {
		opacity: 100;
	}

	.imgDome[aria-current='true'] img {
		opacity: 100;
	}

	.imgDome[aria-current='false'] {
		opacity: 0;
	}

	.imgDome[aria-current='false'] img {
		opacity: 0;
	}

	.imgDome .inner::before,
	.imgDome .inner::after {
		--color: transparent;
		content: '';
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		width: 125%;
		height: 80px;
		filter: blur(4px);
		border-radius: 100%;
		background-color: rgba(83, 139, 85, 0.3);
		z-index: 99;
		transition: background 0.5s ease-in-out;
	}

	.imgDome .inner::before {
		top: -40px;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			var(--color) 50%,
			rgba(255, 255, 255, 0) 100%
		);
	}
	.imgDome .inner::after {
		bottom: -40px;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			var(--color) 50%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	.imgDome[aria-details='2'] .inner::before,
	.imgDome[aria-details='2'] .inner::after {
		--color: rgba(83, 139, 85, 1);
	}

	.imgDome[aria-details='3'] .inner::before,
	.imgDome[aria-details='3'] .inner::after {
		--color: #6e2fa0;
	}

	.imgDome[aria-details='4'] .inner::before,
	.imgDome[aria-details='4'] .inner::after {
		--color: #e09386;
	}

	.imgDome[aria-details='5'] .inner::before,
	.imgDome[aria-details='5'] .inner::after {
		--color: #c0dcff;
	}

	.imgDome[aria-details='6'] .inner::before,
	.imgDome[aria-details='6'] .inner::after {
		--color: #2a63c0;
	}

	.imgDome[aria-details='7'] .inner::before,
	.imgDome[aria-details='7'] .inner::after {
		--color: #c97200;
	}

	.buttonArea {
		position: fixed;
		right: 0;
		bottom: 0;
		padding: 30px;
	}
</style>
