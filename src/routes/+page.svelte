<script lang="ts">
	import seedrandom from 'seedrandom';
	import Tile from './Tile.svelte';
	import WinnerLayover from './WinnerLayover.svelte';
	import GenerateButton from './GenerateButton.svelte';
	import { generateBoard, checkIfWinner, getSelectedIds } from '$lib/board';
	import { getBodyClassList } from '$lib/dom_util';
	import { parseBoardState, saveBoardState } from '$lib/board_state_util';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const boardState = parseBoardState($page);
	// If there is already a seed, go straight to creating a board
	let board = boardState.seed ? generateBoard(boardState.seed) : null;

	let displayWinnerDialog = false;
	let winningTiles = [];

	const handleSelection = (event) => {
		if (displayWinnerDialog) {
			// nothing to do, this has already been evaluated
			return;
		}

		boardState.selected = getSelectedIds(board);
		winningTiles = checkIfWinner(board);
		saveBoardState($page, boardState);

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

	const doGenerate = () => {
		if (!boardState.seed) {
			boardState.seed = seedrandom()();
			saveBoardState($page, boardState);
			board = generateBoard(boardState.seed);
		}
	};
</script>

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
				<li><Tile {tile} on:tileSelected={handleSelection} /></li>
			{/each}
		{/each}
	</ul>
{:else}
	<ul class="board empty">
		<li>
			<GenerateButton on:generateBoard={doGenerate} />
		</li>
	</ul>
{/if}

{#if displayWinnerDialog}
	<WinnerLayover {winningTiles} {boardState} on:layoverRequestsClose={hideWinner} />
{/if}

<svelte:window on:keyup={closeOnEsc} />

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		border: 2px solid rgba(var(--primary-highlight-color), 0.8);
		width: 100%;
	}

	ul.board.empty {
		grid-template-columns: repeat(1, 1fr);
	}

	li {
		aspect-ratio: 1 / 1;
		border: 2px solid rgba(var(--primary-highlight-color), 0.8);
	}

	ul.title {
		border: 0;
	}

	ul.title li {
		aspect-ratio: auto;
		border: 0;
		text-align: center;
		color: rgb(var(--secondary-highlight-color));
		font-weight: bold;
		font-size: 3em;
	}
</style>
