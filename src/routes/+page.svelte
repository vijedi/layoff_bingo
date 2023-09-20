<script lang="ts">
	import Tile from './Tile.svelte';
	import { generateBoard, checkIfWinner } from '$lib/board';

	const board = generateBoard();
	const handleSelection = (event) => {
		const isWinner = checkIfWinner(board);
		if (isWinner) {
			alert('Winner!!');
		}
	};
</script>

<div class="page-container">
	<h1 class="title">L E T G O</h1>
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

<style>
	.page-container {
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
