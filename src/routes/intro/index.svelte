<script>
	import { browser } from '$app/environment';
	import IntroHead from '../../components/header/intro/index.svelte';
	import ButtonHead from '../../components/button/diamond/index.svelte';

	const lists = ['matahari', 'purnama', 'kalasenja', 'semesta', 'samudra', 'bhumi'];
	let index = 0;

	if (browser) {
		setInterval(() => {
			index += 1 % lists.length;
		}, 3000);
	}
</script>

<main>
	<IntroHead />
	<div class="content">
		<div class="topText">#FINDYOUR</div>
		<div class={`hero ${lists[index]}`} id="main-alterego">Alter Ego</div>
		<div class="body">
			Mencari langkah yang tepat, menyelami dengan mendalam, dan memahami metode perawatan terbaik
			untuk diri sendiri.
		</div>
		<div class="btnArea">
			<ButtonHead />
		</div>
	</div>
</main>

<style>
	main {
		position: relative;
		min-height: 100vh;
		background-color: #939393;
		color: #fff;
		padding: 56px 0;
	}

	.content {
		position: relative;
		margin: 44px auto;
		border: 1px solid red;
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
