<script lang="ts">
	import seedrandom from 'seedrandom';

	import { generateBoard, checkIfWinner, getSelectedIds } from '$lib/board';
	import { getBodyClassList } from '$lib/dom_util';
	import { parseBoardState, saveBoardState } from '$lib/board_state_util';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import Button from '$lib/ds/Button.svelte';
	import Tile from './page/Tile.svelte';
	import WinnerLayover from './page/WinnerLayover.svelte';
	import GenerateButton from './page/GenerateButton.svelte';

	// TODO: Board state should probably be a store
	const boardState = parseBoardState($page);

	// If there is already a seed, go straight to creating a board
	let board = boardState.seed ? generateBoard(boardState.seed) : null;

	let displayWinnerDialog = false;
	let winningTiles = null;

	const toggleWinnerLayover = () => {
		if (winningTiles && !displayWinnerDialog) {
			displayWinnerDialog = true;
			getBodyClassList().add('no-scroll');
		} else {
			displayWinnerDialog = false;
			getBodyClassList().remove('no-scroll');
		}
	};

	const handleSelection = (event) => {
		if (displayWinnerDialog) {
			// nothing to do, this has already been evaluated
			return;
		}

		boardState.selected = getSelectedIds(board);
		winningTiles = checkIfWinner(board);
		saveBoardState($page, boardState);
		toggleWinnerLayover();
	};

	const closeOnEsc = (event) => {
		if (event.repeat || !displayWinnerDialog) {
			return;
		}

		if (event.key === 'Escape') {
			toggleWinnerLayover();
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

{#if winningTiles}
	<div class="winner-button-container">
		<Button on:click={toggleWinnerLayover}>🎉🎉 Winner! Get Share Link 🎉🎉</Button>
	</div>
{/if}

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
	<WinnerLayover {winningTiles} {boardState} on:layoverRequestsClose={toggleWinnerLayover} />
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

	.winner-button-container {
		text-align: center;
		margin: 0 0 16px 0;
	}
</style>
