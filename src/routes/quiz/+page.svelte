<script lang="ts">
	import { scale, fade, blur } from 'svelte/transition';
	import logo from '$lib/assets/logo-white.svg';

	let blurs = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	];
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

		<div class="logo">
			<img
				alt="Y2SKYN Logo"
				src={logo}
				title="Y2SKYN Logo"
				in:scale={{ delay: 250, duration: 750 }}
			/>
		</div>
	</section>
</main>

<style>
	@keyframes animates {
		from {
			background-size: 100%;
			background-position: 0% 50%;
		}
		to {
			background-size: 150%;
			background-position: 100% 100%;
		}
	}
	main {
		min-height: 100vh;
		position: relative;
		background-image: url('$lib/assets/quiz/quiz-bg-low.jpg'),
			url('$lib/assets/quiz/quiz-bg-mid.jpg');
		background-position: 0% 50%;
		background-repeat: repeat;
		background-size: 100%;
		padding: 10px;
		color: #fff;
		animation: animates 6s ease infinite alternate;
	}

	.logo {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
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
</style>
