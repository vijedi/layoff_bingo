<script lang="ts">
	import Tile from './Tile.svelte';
	import WinnerLayover from './WinnerLayover.svelte';
	import GenerateButton from './GenerateButton.svelte';
	import { generateBoard, checkIfWinner } from '$lib/board';
	import { getBodyClassList } from '$lib/dom_util';

	let displayWinnerDialog = false;
	let winningTiles = [];

	let board = null;

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
			<GenerateButton />
		</li>
	</ul>
{/if}

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
