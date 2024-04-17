<script>
	import { browser } from '$app/environment';
	import LangSwitcher from '../lang-switcher/index.svelte';

	const lists = ['matahari', 'purnama', 'kalasenja', 'semesta', 'samudra', 'bhumi'];
	let init = 0;

	if (browser) {
		const elLogo = document.getElementById('y2skyn-intro-logo');
		if (elLogo) {
			elLogo.classList.add(lists[init]);
			setInterval(() => {
				init = (init + 1) % lists.length;
			}, 3000);
		}
	}
</script>

<header>
	<div class="area"></div>
	<div class="area logo">
		<div class={`mask-logo`} id="y2skyn-intro-logo" aria-label={`${lists[init]}`}></div>
	</div>
	<div class="area actions">
		<LangSwitcher />
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.area {
		width: 33%;
	}

	.area.logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.area.actions {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
	}

	@property --col1 {
		syntax: '<color>';
		inherits: false;
		initial-value: #fff;
	}

	@property --col2 {
		syntax: '<color>';
		inherits: false;
		initial-value: #ffc700;
	}

	@property --pos2 {
		syntax: '<percentage>';
		inherits: false;
		initial-value: 100%;
	}

	@property --col3 {
		syntax: '<color>';
		inherits: false;
		initial-value: transparent;
	}

	@property --pos3 {
		syntax: '<percentage>';
		inherits: false;
		initial-value: 85%;
	}

	.mask-logo {
		width: 164px;
		height: 45px;
		background-image: linear-gradient(
			90deg,
			var(--col1) 0%,
			var(--col2) var(--pos2),
			var(--col3) 100%
		);
		mask-image: url('/images/intro/logo/y2skyn-logo-black.png');
		mask-size: cover;
		mask-repeat: no-repeat;
		mask-position: center;
		margin: 0 auto;
		transition: --col2 0.25s ease-in-out;
	}

	.mask-logo[aria-label='matahari'] {
		--col2: #ffc700;
	}

	.mask-logo[aria-label='purnama'] {
		--col2: #f8d1ad;
	}

	.mask-logo[aria-label='kalasenja'] {
		--col2: #8a83b6;
		--pos2: 50%;
		--col3: #fff;
		--pos3: 85%;
	}

	.mask-logo[aria-label='semesta'] {
		--col2: #fff;
	}

	.mask-logo[aria-label='samudra'] {
		--col2: #ffc700;
	}

	.mask-logo[aria-label='bhumi'] {
		--col2: #96a7c3;
		--pos2: 50%;
	}
</style>
