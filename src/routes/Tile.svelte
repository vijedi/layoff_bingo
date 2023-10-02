<script lang="ts">
	import type { Tile } from '$lib/board_types';
	import { createEventDispatcher } from 'svelte';

	export let tile: Tile;

	const dispatch = createEventDispatcher();

	$: selected = tile.selected;
	function toggle() {
		tile.selected = !tile.selected;
		dispatch('tileSelected', { tile });
	}
</script>

<button type="button" on:click={toggle} class:selected>
	<div class="button-content">
		{tile.quote}
	</div>
</button>

<style>
	button {
		background: transparent;
		border: 0;
		margin: 0;
		padding: 4px;
		height: 100%;
		width: 100%;
		cursor: pointer;
	}

	button.selected .button-content {
		background: #ee8c1188;
		border-color: #ee8c11;
	}

	.button-content {
		text-align: center;
		flex-shrink: 0;
		padding: 0.1em;
		font-size: 1.2em;
		overflow-wrap: break-word;
		max-height: calc(100vmin / 5);
		height: calc(100% - 9px);
		width: calc(100% - 9px);
		display: flex;
		align-items: center;
		justify-content: center;
		border: 3px solid transparent;
		border-radius: 50%;
		overflow: hidden;
	}
</style>
