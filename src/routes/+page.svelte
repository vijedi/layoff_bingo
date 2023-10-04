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
</div>
<div class="footer">
	&copy; 2023. Produced on a whim by <a href="https://tejusparikh.com">Tejus Parikh</a>.
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
		background: url(./paper_background.jpg) no-repeat;
		background-size: cover;
		font-family: sans-serif;
		width: calc(100vmin - 20px);
		padding: 40px 20px 0 20px;
		box-shadow: 1px 1px 14px #88888888;
	}

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

	.footer {
		text-align: center;
		color: #333;
		padding: 12px 0;
	}
</style>
