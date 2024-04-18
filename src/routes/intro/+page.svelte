<script>
	const steps = [
		'circle',
		'dome-1',
		'dome-2',
		'dome-3',
		'dome-4',
		'dome-5',
		'dome-6',
		'dome-7',
		'dome-8'
	];
	let index = 0;
	let view = steps[index];

	setTimeout(() => {
		if (index < steps.length - 1) {
			setInterval(() => {
				index += 1;
				view = steps[index];
			}, 1500);
		}
	}, 1500);

	$: console.log({ view });
</script>

<main>
	<div class="circle" />
	{#each steps as step}
		<img
			class="imgDome"
			aria-current={view === step}
			alt={step}
			src={`/images/intros/${step}.webp`}
		/>
	{/each}
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
