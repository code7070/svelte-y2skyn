<script lang="ts">
	import { blur } from 'svelte/transition';
</script>

<main>
	<section>
		<div class="glass">
			<div class="blur" in:blur={{ delay: 1050 }} />
			<div class="blur" in:blur={{ delay: 1050 }} />
			<div class="blur" in:blur={{ delay: 1050 }} />
			<div class="blur" in:blur={{ delay: 950 }} />
			<div class="blur" in:blur={{ delay: 850 }} />
			<div class="blur" in:blur={{ delay: 750 }} />
			<div class="blur" in:blur={{ delay: 650 }} />
			<div class="blur" in:blur={{ delay: 550 }} />
			<div class="blur" in:blur={{ delay: 450 }} />
			<div class="blur" in:blur={{ delay: 350 }} />
			<div class="blur" in:blur={{ delay: 250 }} />
			<div class="blur" in:blur />
			<div class="blur" in:blur />
			<div class="blur" in:blur={{ delay: 250 }} />
			<div class="blur" in:blur={{ delay: 350 }} />
			<div class="blur" in:blur={{ delay: 450 }} />
			<div class="blur" in:blur={{ delay: 550 }} />
			<div class="blur" in:blur={{ delay: 650 }} />
			<div class="blur" in:blur={{ delay: 750 }} />
			<div class="blur" in:blur={{ delay: 850 }} />
			<div class="blur" in:blur={{ delay: 950 }} />
			<div class="blur" in:blur={{ delay: 1050 }} />
			<div class="blur" in:blur={{ delay: 1050 }} />
			<div class="blur" in:blur={{ delay: 1050 }} />
		</div>
		<slot />
	</section>
</main>

<style>
	@keyframes animates {
		from {
			background-position: 0% 50%;
		}
		to {
			background-position: 100% 100%;
		}
	}
	main {
		min-height: 100vh;
		position: relative;
		background-image: url('$lib/assets/quiz/quiz-bg-low.jpg'),
			url('$lib/assets/quiz/quiz-bg-mid.jpg');
		background-position: 0% 50%;
		background-repeat: no-repeat;
		background-size: cover;
		color: #fff;
		animation: animates 3s ease infinite alternate;
		padding: 20px;
	}

	.glass {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		display: flex;
	}

	.blur {
		background: linear-gradient(to right, rgba(193, 193, 193, 0.15), transparent);
		filter: blur();
		flex: 1;
		height: 100%;
	}

	.glass .blur:nth-child(1),
	.glass .blur:nth-child(2),
	.glass .blur:nth-child(3),
	.glass .blur:nth-child(4),
	.glass .blur:nth-child(21),
	.glass .blur:nth-child(22),
	.glass .blur:nth-child(23),
	.glass .blur:nth-child(24) {
		display: none;
	}

	@media (min-width: 685px) {
		main {
			padding: 60px 40px;
		}

		.glass .blur:nth-child(1),
		.glass .blur:nth-child(2),
		.glass .blur:nth-child(3),
		.glass .blur:nth-child(4),
		.glass .blur:nth-child(21),
		.glass .blur:nth-child(22),
		.glass .blur:nth-child(23),
		.glass .blur:nth-child(24) {
			display: block;
		}
	}
</style>
