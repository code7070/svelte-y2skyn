<script>
	import dome1 from '$lib/assets/intros/dome-1-low.webp';
	import dome2 from '$lib/assets/intros/dome-2-low.webp';
	import dome3 from '$lib/assets/intros/dome-3-low.webp';
	import dome4 from '$lib/assets/intros/dome-4-low.webp';
	import dome5 from '$lib/assets/intros/dome-5-low.webp';
	import dome6 from '$lib/assets/intros/dome-6-low.webp';

	const domes = ['dome-6', 'dome-2', 'dome-3', 'dome-4', 'dome-5', 'dome-6', 'dome-7'];
	const steps = ['circle', ...domes];

	let index = 0;
	let view = steps[index];

	setTimeout(() => {
		if (index < steps.length - 1) {
			setInterval(() => {
				if (index < steps.length - 1) {
					index += 1;
					view = steps[index];
				}
			}, 1500);
		}
	}, 1500);

	$: console.log({ view });
</script>

<main>
	<div class="circle" />
	<img class="imgDome" aria-current={view === 'dome-1'} alt={'dome-1'} src={dome1} />
	<img class="imgDome" aria-current={view === 'dome-2'} alt={'dome-2'} src={dome2} />
	<img class="imgDome" aria-current={view === 'dome-3'} alt={'dome-3'} src={dome3} />
	<img class="imgDome" aria-current={view === 'dome-4'} alt={'dome-4'} src={dome4} />
	<img class="imgDome" aria-current={view === 'dome-5'} alt={'dome-5'} src={dome5} />
	<img class="imgDome" aria-current={view === 'dome-6'} alt={'dome-6'} src={dome6} />
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
</style>
