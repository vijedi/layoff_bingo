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

<div class="page-container">
	<h1 class="title">LETGO</h1>
	<div class="board-container">
		<ul class="board">
			{#each board.tiles as row}
				{#each row as tile}
					<li><Tile {tile} on:tileSelected={handleSelection} /></li>
				{/each}
			{/each}
		</ul>
	</div>
</div>

{#if displayWinnerDialog}
	<WinnerLayover {winningTiles} on:layoverRequestsClose={hideWinner} />
{/if}

<svelte:window on:keyup={closeOnEsc} />

<style>
	.page-container {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
	}

	.board-container {
		width: calc(100vmin - 20px);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		border: 2px solid #ee8c11aa;
	}

	li {
		aspect-ratio: 1 / 1;
		border: 2px solid #ee8c11aa;
	}

	h1 {
		color: #ee11e1;
	}
</style>
