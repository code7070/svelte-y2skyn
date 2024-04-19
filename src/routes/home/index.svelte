<script>
	import { browser } from '$app/environment';
	import IntroHead from '../../components/header/intro/index.svelte';
	import ButtonDiamond from '../../components/button/diamond/index.svelte';

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
			<ButtonDiamond link="/intro" text="Mulai Perjalananmu" />
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
		padding: 56px 0;
		transition: background-image 0.15s ease-in-out;
	}

	main[aria-label='matahari'] {
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
		background-image: url($lib/home/background/bhumi.jpg), url($lib/home/background/bhumi-low.jpg);
	}

	.content {
		position: relative;
		margin: 44px auto;
	}

	.topText {
		text-align: center;
		font-size: 3vw;
		letter-spacing: 24px;
		font-weight: 500;
	}

	.hero {
		font-family: dahlia;

		font-size: 15vw;
		text-align: center;
		line-height: 140%;

		background-image: url('/images/intro/hero-font/matahari.jpg');
		background-position: center;
		background-size: contain;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;

		transition: background-image 1s ease-in-out;

		margin-top: -5vw;
		position: relative;
	}

	.hero.matahari {
		background-image: url('/images/intro/hero-font/matahari.jpg');
	}

	.hero.purnama {
		background-image: url('/images/intro/hero-font/purnama.jpg');
	}

	.hero.kalasenja {
		background-image: url('/images/intro/hero-font/kalasenja.jpg');
	}

	.hero.samudra {
		background-image: url('/images/intro/hero-font/samudra.jpg');
	}

	.hero.semesta {
		background-image: url('/images/intro/hero-font/semesta.jpg');
	}

	.hero.bhumi {
		background-image: url('/images/intro/hero-font/bhumi.jpg');
	}

	.body {
		text-align: center;
		font-size: 24px;
		color: #fff;
		width: 90%;
		max-width: 640px;
		margin: 60px auto 30px;
	}

	.btnArea {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}
</style>
