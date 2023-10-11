<script lang="ts">
	import type { Tile } from '$lib/board_types';
	import { selectedTilesStore } from '$lib/selected_tiles_store';

	export let tile: Tile;

	let selected;
	let readOnly = tile.readOnly;

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
		<span class="highlight">{tile.id}</span>
		{tile.quote}
	</div>
</button>

<style>
	button {
		background: transparent;
		border: 0;
		margin: 4px 0;
		padding: 12px 4px;
		height: 100%;
		width: 100%;
		cursor: pointer;
		text-transform: uppercase;
		text-align: left;
		border: 3px solid rgb(var(--primary-highlight-color));
		display: block;
		font-weight: bold;
		color: rgb(var(--main-color));
	}

	button.selected {
		background: rgba(var(--primary-highlight-color), 0.5);
	}

	.button-content {
		display: flex;
		align-items: center;
	}

	.highlight {
		display: flex;
		background-color: rgb(var(--primary-highlight-color));
		border-radius: 50%;
		height: 2em;
		width: 2em;
		align-self: center;
		align-items: center;
		justify-content: center;
		margin-right: 1em;
	}

	button.readOnly {
		cursor: default;
	}
</style>
