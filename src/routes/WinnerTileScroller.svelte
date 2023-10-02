<script lang="ts">
	import type { Tile } from '$lib/board_types';
	import TileQuoteCard from './TileQuoteCard.svelte';
	export let winningTiles: Tile[];
	let cardIndex = 0;

	const moveForward = () => {
		cardIndex++;
		if (cardIndex >= winningTiles.length) {
			cardIndex = 0;
		}
	};

	const moveBackward = () => {
		cardIndex--;
		if (cardIndex < 0) {
			cardIndex = winningTiles.length - 1;
		}
	};
</script>

<div class="card-list">
	<div class="card-nav">
		<button type="button" on:click={moveBackward}>&laquo; Prev</button>
		<div>{cardIndex + 1} of {winningTiles.length}</div>
		<button type="button" on:click={moveForward}>Next &raquo;</button>
	</div>
	{#each winningTiles as tile, i}
		<div class="card-container" class:visible={cardIndex === i}>
			<TileQuoteCard {tile} />
		</div>
	{/each}
</div>

<style>
	button {
		text-transform: uppercase;
	}
	.card-nav {
		display: flex;
		width: 100%;
	}
	.card-nav div {
		flex-grow: 1;
		text-align: center;
	}

	.card-container {
		display: none;
		padding-top: 8px;
	}

	.visible {
		display: block;
	}
</style>
