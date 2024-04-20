<script>
	import logo from '$lib/assets/y2skyn-logo-wide-white.svg';
	import Account from '$lib/components/header/account/index.svelte';
</script>

<header>
	<a href="/">
		<img alt="Y2SKYN Logo" title="Y2SKYN Logo" src={logo} />
	</a>
	<div>
		<Account />
	</div>
</header>

<style>
	header {
		max-width: 100%;
		display: flex;
		justify-content: space-between;
		position: relative;
	}
</style>
