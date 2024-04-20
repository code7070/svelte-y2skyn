<script lang="ts">
	import { scale } from 'svelte/transition';
	import logo from '$lib/assets/logo-white.svg';
	import { quintOut } from 'svelte/easing';
	let title = 'Y2SKYN Logo';

	export let view: string = '';
</script>

{#if view === 'logo'}
	<div class="logo">
		<img alt={title} src={logo} {title} transition:scale={{ easing: quintOut }} />
	</div>
{/if}

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
		/* transform: scale(0.5);
		opacity: 0; */
		/* animation: shown 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.25s forwards; */
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
