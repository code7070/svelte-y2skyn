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
			background-size: 150%;
			background-position: 0% 50%;
		}
		to {
			background-size: 200%;
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
		background-size: 150%;
		padding: 10px;
		color: #fff;
		animation: animates 6s ease infinite alternate;
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
