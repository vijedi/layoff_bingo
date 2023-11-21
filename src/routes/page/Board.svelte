<script lang="ts">
	import type { Board } from '$lib/board_types';
	import seedrandom from 'seedrandom';

	import Button from '$lib/ds/Button.svelte';
	import { isCompactMode } from '$lib/ds/layout_helper';
	import Tile from './Tile.svelte';
	import TileButton from './TileButton.svelte';
	import GenerateButton from './GenerateButton.svelte';

	export let board: Board;
	let innerWidth: number;
	let outerWidth: number;

	$: compactMode = isCompactMode(Math.min(innerWidth, outerWidth));
</script>

<div class="board-outer">
	<ul class="title">
		<li>L</li>
		<li>E</li>
		<li>T</li>
		<li>G</li>
		<li>O</li>
	</ul>

	{#if board}
		<ul class="board">
			{#each board.tiles as row}
				{#each row as tile}
					<li><Tile {tile} on:tileSelected /></li>
				{/each}
			{/each}
		</ul>

		{#if compactMode}
			<h4>Clichés</h4>
			<div class="mobile-buttons">
				{#each board.tiles as row}
					{#each row as tile}
						<TileButton {tile} on:tileSelected />
					{/each}
				{/each}
			</div>
		{/if}
	{:else}
		<ul class="board empty">
			<li>
				<GenerateButton on:generateBoard />
			</li>
		</ul>
	{/if}
</div>

<svelte:window bind:innerWidth bind:outerWidth />

<style>
	.board-outer {
		border: 5px solid rgba(var(--primary-highlight-color), 0.8);
		border-radius: 10px;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		width: 100%;
	}

	ul.board.empty {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 1fr);
	}

	li {
		aspect-ratio: 1;
		border: 2px solid rgba(var(--primary-highlight-color), 0.8);
	}

	ul.board {
		grid-template-rows: repeat(5, 1fr);
		border: 2px solid rgba(var(--primary-highlight-color), 0.8);
	}

	ul.title {
		background: rgba(var(--primary-highlight-color), 0.8);
	}

	ul.title > li {
		aspect-ratio: auto;
		border: 0;
		text-align: center;
		color: white;
		font-weight: bold;
		font-size: 3em;
	}

	h4 {
		text-align: center;
		margin-bottom: 0;
	}
</style>
