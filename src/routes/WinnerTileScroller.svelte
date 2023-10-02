<script lang="ts">
	import type { Tile } from '$lib/board_types';
	import { onMount } from 'svelte';
	import TileQuoteCard from './TileQuoteCard.svelte';

	export let winningTiles: Tile[];
	let cardIndex = 0;
	let cardsContainer;
	let maxHeight = 0;

	function adjustHeight() {
		if (cardsContainer) {
			cardsContainer.style.height = `${maxHeight}px`;
		}
	}

	onMount(adjustHeight);

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

	const setMaxHeight = (node) => {
		const max = Math.max(node.offsetHeight, maxHeight);
		if (max !== maxHeight) {
			maxHeight = max;
		}
	};
</script>

<div class="card-list">
	<div class="card-nav">
		<button type="button" on:click={moveBackward}>&laquo; Prev</button>
		<div>{cardIndex + 1} of {winningTiles.length}</div>
		<button type="button" on:click={moveForward}>Next &raquo;</button>
	</div>
	<div class="cards-container" bind:this={cardsContainer}>
		{#each winningTiles as tile, i}
			<div class="card-container" class:visible={cardIndex === i} use:setMaxHeight>
				<TileQuoteCard {tile} />
			</div>
		{/each}
	</div>
</div>

<style>
	button {
		text-transform: uppercase;
	}
	.card-list {
		position: relative;
	}
	.card-nav {
		display: flex;
		width: 100%;
	}
	.card-nav div {
		flex-grow: 1;
		text-align: center;
	}

	.cards-container {
		position: relative;
		top: 0;
		left: 0;
	}
	.card-container {
		padding-top: 8px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		visibility: hidden;
	}

	.visible {
		visibility: visible;
	}
</style>
