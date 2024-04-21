<script>
	let langs = ['ID', 'EN'];
	let active = 0;

	const toggleLang = () => {
		if (active === 1) return (active = 0);
		return (active = 1);
	};
</script>

<button class="wrapper1" on:click={toggleLang}>
	<div class="wrapper2">
		<div class="pos" aria-details={langs[active]} />
		{#each langs as lang}
			<div class="lang">{lang}</div>
		{/each}
	</div>
</button>

<style>
	:root {
		--pwr: 8px;
	}

	.wrapper1 {
		padding: 0;
		background: rgba(255, 255, 255, 0.6);
		border-radius: 999px;
		overflow: hidden;
		padding: 4px;
		transition: 0.15s ease-in-out;
		-webkit-tap-highlight-color: transparent;
	}

	.wrapper1:active {
		transform: scale(0.925);
	}

	.wrapper2 {
		position: relative;
		display: flex;
	}

	.pos {
		position: absolute;
		background: #fff;
		border-radius: 999px;
		width: 50%;
		height: 100%;
		top: 50%;
		transform: translate(0, -50%);
		transition: 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.pos[aria-details='ID'] {
		left: 0%;
	}
	.pos[aria-details='EN'] {
		left: 50%;
	}

	.lang {
		position: relative;
		padding: 4px;
		color: rgba(0, 0, 0, 0.5);
		font-size: 16px;
		min-width: 30px;
	}

	@media (min-width: 685px) {
		.lang {
			font-size: 20px;
			padding: 8px 16px;
		}
	}
</style>
