<script lang="ts">
	import Tile from './Tile.svelte';
	import WinnerLayover from './WinnerLayover.svelte';
	import { generateBoard, checkIfWinner } from '$lib/board';
	import { getBodyClassList } from '$lib/dom_util';

	let displayWinnerDialog = false;
	let winningTiles = [];

	const board = generateBoard();

	const handleSelection = (event) => {
		if (displayWinnerDialog) {
			// nothing to do, this has already been evaluated
			return;
		}

		winningTiles = checkIfWinner(board);
		if (winningTiles) {
			displayWinnerDialog = true;
			getBodyClassList().add('no-scroll');
		}
	};

	const hideWinner = (event) => {
		displayWinnerDialog = false;
		getBodyClassList().remove('no-scroll');
	};

	const closeOnEsc = (event) => {
		if (event.repeat || !displayWinnerDialog) {
			return;
		}

		if (event.key === 'Escape') {
			hideWinner();
		}
	};
</script>

<ul class="title">
	<li class="title">L</li>
	<li class="title">E</li>
	<li class="title">T</li>
	<li class="title">G</li>
	<li class="title">O</li>
</ul>
<ul class="board">
	{#each board.tiles as row}
		{#each row as tile}
			<li><Tile {tile} on:tileSelected={handleSelection} /></li>
		{/each}
	{/each}
</ul>

{#if displayWinnerDialog}
	<WinnerLayover {winningTiles} on:layoverRequestsClose={hideWinner} />
{/if}

<svelte:window on:keyup={closeOnEsc} />

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		border: 2px solid #ee8c11aa;
		width: 100%;
	}

	li {
		aspect-ratio: 1 / 1;
		border: 2px solid #ee8c11aa;
	}

	ul.title {
		border: 0;
	}

	ul.title li {
		aspect-ratio: auto;
		border: 0;
		text-align: center;
		color: #ee11e1;
		font-weight: bold;
		font-size: 3em;
	}
</style>
