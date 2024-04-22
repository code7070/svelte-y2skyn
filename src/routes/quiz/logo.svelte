<script lang="ts">
	import { scale } from 'svelte/transition';
	import logo from '$lib/assets/logo-white.svg';
	import { quintOut } from 'svelte/easing';

	export let view: string = '';
	export let loaded: boolean = false;

	let title = 'Y2SKYN Logo';

	const createLoadObserver = (handler: any) => {
		let waiting = 0;

		const onload = (el: any) => {
			waiting++;
			el.addEventListener('load', () => {
				waiting--;
				if (waiting === 0) {
					handler();
				}
			});
		};

		return onload;
	};

	const onload = createLoadObserver(() => {
		loaded = true;
	});
</script>

{#if view === 'logo'}
	<div class="logo">
		<img alt={title} src={logo} {title} use:onload transition:scale={{ easing: quintOut }} />
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
