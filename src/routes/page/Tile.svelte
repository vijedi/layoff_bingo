<script lang="ts">
	import type { Tile } from '$lib/board_types';
	import { isCompactMode } from '$lib/ds/layout_helper';
	import { selectedTilesStore } from '$lib/selected_tiles_store';

	export let tile: Tile;

	let innerWidth: number;
	let outerWidth: number;
	let selected;
	let readOnly = tile.readOnly;

	$: compactMode = isCompactMode(Math.min(innerWidth, outerWidth));

	selectedTilesStore.subscribe((store) => {
		selected = !!store[tile.id];
	});

	function toggle() {
		if (tile.readOnly) {
			return;
		}

		selectedTilesStore.update((store) => {
			store[tile.id] = !store[tile.id];
			return store;
		});
	}
</script>

<button type="button" on:click={toggle} class:selected class:readOnly>
	<div class="button-content">
		{#if compactMode}
			{tile.id}
		{:else}
			{tile.quote}
		{/if}
	</div>
</button>

<svelte:window bind:innerWidth bind:outerWidth />

<style>
	button {
		background: transparent;
		border: 0;
		margin: 0;
		padding: 4px;
		height: 100%;
		width: 100%;
		cursor: pointer;
		text-transform: uppercase;
	}

	button.selected .button-content {
		background: rgba(var(--primary-highlight-color), 0.5);
		border-color: rgb(var(--primary-highlight-color));
	}

	button.readOnly {
		cursor: default;
	}

	.button-content {
		text-align: center;
		flex-shrink: 0;
		padding: 0.1em;
		font-size: 1em;
		overflow-wrap: word-break;
		height: calc(100% - 9px);
		width: calc(100% - 9px);
		display: flex;
		align-items: center;
		justify-content: center;
		border: 3px solid transparent;
		border-radius: 50%;
		font-weight: bold;
		color: rgb(var(--main-color));
	}
</style>
