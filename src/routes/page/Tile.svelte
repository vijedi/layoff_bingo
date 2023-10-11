<script lang="ts">
	import type { Tile } from '$lib/board_types';
	import { isCompactMode } from '$lib/ds/layout_helper';
	import { createEventDispatcher } from 'svelte';

	export let tile: Tile;

	let outerWidth: number;
	const dispatch = createEventDispatcher();

	$: selected = tile.selected;
	$: readOnly = tile.readOnly;
	$: compactMode = isCompactMode(outerWidth);

	function toggle() {
		if (tile.readOnly) {
			return;
		}

		tile.selected = !tile.selected;
		dispatch('tileSelected', { tile });
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

<svelte:window bind:outerWidth />

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
