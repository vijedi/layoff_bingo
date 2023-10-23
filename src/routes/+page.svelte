<script lang="ts">
	import seedrandom from 'seedrandom';

	import { onMount } from 'svelte';
	import { generateBoard, checkIfWinner } from '$lib/board';
	import { selectedTilesStore, initSelectedTiles } from '$lib/selected_tiles_store';
	import { getBodyClassList } from '$lib/dom_util';
	import { parseBoardState, saveBoardState } from '$lib/board_state_util';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import Button from '$lib/ds/Button.svelte';
	import Board from './page/Board.svelte';
	import WinnerLayover from './page/WinnerLayover.svelte';

	const boardState = parseBoardState($page);

	// If there is already a seed, go straight to creating a board
	let board = boardState.seed ? generateBoard(boardState.seed, boardState.isSharedBoard) : null;

	let winningTiles = null;
	let displayWinnerDialog = false;

	initSelectedTiles(boardState.selected);

	selectedTilesStore.subscribe((selected) => {
		if (!board) {
			return;
		}

		boardState.selected = Object.getOwnPropertyNames(selected);
		winningTiles = checkIfWinner(board, selected);
		saveBoardState($page, boardState);
		toggleWinnerLayover();
	});

	function toggleWinnerLayover() {
		if (winningTiles && !displayWinnerDialog) {
			displayWinnerDialog = true;
			getBodyClassList()?.add('no-scroll');
		} else {
			displayWinnerDialog = false;
			getBodyClassList()?.remove('no-scroll');
		}
	}

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

<svelte:head>
	<title>Layoff bingo board</title>
</svelte:head>

{#if winningTiles}
	<div class="winner-button-container">
		<Button color="orange" on:click={toggleWinnerLayover}>
			{#if boardState.isSharedBoard}
				🎉🎉 Winner! See details on what matched 🎉🎉
			{:else}
				🎉🎉 Winner! Get Share Link 🎉🎉
			{/if}
		</Button>
	</div>
{/if}

<Board {board} on:generateBoard={doGenerate} />

{#if displayWinnerDialog}
	<WinnerLayover {winningTiles} {boardState} on:layoverRequestsClose={toggleWinnerLayover} />
{/if}

<svelte:window on:keyup={closeOnEsc} />

<style>
	.winner-button-container {
		text-align: center;
		margin: 0 0 16px 0;
	}
</style>
