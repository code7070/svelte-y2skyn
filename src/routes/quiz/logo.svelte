<script>
	import logo from '$lib/assets/logo-white.svg';
	let title = 'Y2SKYN Logo';
</script>

<div class="logo">
	<img alt={title} src={logo} {title} />
</div>

<style>
	@keyframes shown {
		from {
			transform: scale(0.5);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
	.logo {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		transform: scale(0.5);
		opacity: 0;
		animation: shown 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.25s forwards;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
