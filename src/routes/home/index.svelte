<script>
	import { browser } from '$app/environment';
	import IntroHead from '$lib/components/header/intro/index.svelte';
	import ButtonDiamond from '$lib/components/button/diamond/index.svelte';

	const lists = ['matahari', 'purnama', 'kalasenja', 'semesta', 'samudra', 'bhumi'];
	let index = 0;

	if (browser) {
		setInterval(() => {
			index = (index + 1) % lists.length;
		}, 3000);
	}
</script>

<main aria-label={lists[index]}>
	<IntroHead />
	<div class="content">
		<div class="topText">#FINDYOUR</div>
		<div class={`hero ${lists[index]}`} id="main-alterego">Alter Ego</div>
		<div class="body">
			Mencari langkah yang tepat, menyelami dengan mendalam, dan memahami metode perawatan terbaik
			untuk diri sendiri.
		</div>
		<div class="btnArea">
			<ButtonDiamond link="/intro">Mulai Perjalananmu</ButtonDiamond>
		</div>
	</div>
</main>

<style>
	main {
		position: relative;
		min-height: 100vh;
		background-color: orange;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		color: #fff;
		padding: 24px 0;
		transition: background-image 0.15s ease-in-out;
	}

	main[aria-label='matahari'] {
		background-color: orange;
		background-image: url($lib/assets/home/background/matahari.jpg),
			url($lib/assets/home/background/matahari-low.jpg);
	}
	main[aria-label='kalasenja'] {
		background-image: url($lib/assets/home/background/kalasenja.jpg),
			url($lib/assets/home/background/kalasenja-low.jpg);
	}
	main[aria-label='purnama'] {
		background-image: url($lib/assets/home/background/purnama.jpg),
			url($lib/assets/home/background/purnama-low.jpg);
	}

	main[aria-label='semesta'] {
		background-image: url($lib/assets/home/background/semesta.jpg),
			url($lib/assets/home/background/semesta-low.jpg);
	}
	main[aria-label='samudra'] {
		background-image: url($lib/assets/home/background/samudra.jpg),
			url($lib/assets/home/background/samudra-low.jpg);
	}
	main[aria-label='bhumi'] {
		background-image: url($lib/assets/home/background/bhumi.jpg),
			url($lib/assets/home/background/bhumi-low.jpg);
	}

	.content {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(0, -50%);
		width: 100%;
	}

	.topText {
		--size: 20px;
		text-align: center;
		/* font-size: 3vw; */
		font-size: var(--size);
		letter-spacing: calc(var(--size) * 0.6);
		font-weight: 500;
	}

	.hero {
		font-family: dahlia;

		/* font-size: 15vw; */
		font-size: 78px;
		text-align: center;
		line-height: 140%;

		background-image: url('$lib/assets/home/hero-font/matahari.jpg'),
			url('$lib/assets/home/hero-font/matahari-low.jpg');
		background-position: center;
		background-size: contain;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;

		transition: background-image 1s ease-in-out;

		/* margin-top: -1vw; */
		margin-top: -20px;
		position: relative;
	}

	.hero.matahari {
		background-image: url('$lib/assets/home/hero-font/matahari.jpg'),
			url('$lib/assets/home/hero-font/matahari-low.jpg');
	}

	.hero.purnama {
		background-image: url('$lib/assets/home/hero-font/purnama.jpg'),
			url('$lib/assets/home/hero-font/purnama-low.jpg');
	}

	.hero.kalasenja {
		background-image: url('$lib/assets/home/hero-font/kalasenja.jpg'),
			url('$lib/assets/home/hero-font/kalasenja-low.jpg');
	}

	.hero.samudra {
		background-image: url('$lib/assets/home/hero-font/samudra.jpg'),
			url('$lib/assets/home/hero-font/samudra-low.jpg');
	}

	.hero.semesta {
		background-image: url('$lib/assets/home/hero-font/semesta.jpg'),
			url('$lib/assets/home/hero-font/semesta-low.jpg');
	}

	.hero.bhumi {
		background-image: url('$lib/assets/home/hero-font/bhumi.jpg'),
			url('$lib/assets/home/hero-font/bhumi-low.jpg');
	}

	.body {
		--sizeBody: 14px;
		text-align: center;
		font-size: var(--sizeBody);
		color: #fff;
		width: 90%;
		max-width: 320px;
		margin: 20px auto;
		line-height: calc(var(--sizeBody) * 1.4);
	}

	.btnArea {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}

	@media (min-width: 685px) {
		main {
			padding: 56px 0;
		}

		.content {
			position: relative;
			margin: 44px auto;
			top: initial;
			transform: translate(0, 0);
			max-width: 100%;
		}

		.topText {
			--size: 40px;
		}

		.hero {
			font-size: 188px;
			margin-top: -50px;
		}

		.body {
			--sizeBody: 24px;
			max-width: 640px;
			margin: 30px auto;
		}
	}
</style>
