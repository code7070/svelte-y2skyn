<script>
	import { goto } from '$app/navigation';
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
	let cint;

	function updater() {
		cint = setInterval(() => {
			if (index < 7) {
				index += 1;
				view = `dome-${index}`;
			} else {
				index = 0;
				if (goto) goto('/quiz');
			}
		}, 1500);
	}

	onMount(() => {
		setTimeout(updater, 1500);
	});

	onDestroy(() => {
		clearInterval(cint);
	});

	$: console.log({ view });
</script>

<main>
	<div class="circle" />
	{#each domes as dome, i}
		<img class="imgDome" aria-current={index === i + 1} alt={`dome-${i}`} src={dome} />
	{/each}
	<div class="buttonArea">
		<ButtonDiamond text="Skip Intro" link="/quiz"></ButtonDiamond>
	</div>
</main>

<style>
	main {
		position: relative;
		min-height: 100vh;
		background: #131313;
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
		height: 100%;
		width: 100%;
		object-fit: cover;
		display: block;
		transition: 0.5s ease-in-out;
	}

	.imgDome[aria-current='true'] {
		opacity: 100;
	}

	.imgDome[aria-current='false'] {
		opacity: 0;
	}

	.buttonArea {
		position: fixed;
		right: 0;
		bottom: 0;
		padding: 30px;
	}
</style>
