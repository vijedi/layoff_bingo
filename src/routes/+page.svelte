<script lang="ts">
	import Square from './Square.svelte';
	import { generateBoard } from '$lib/board_content';

	const board = generateBoard();
</script>

<div class="board-container">
	<div class="board">
		<h1 class="title">L E T G O</h1>
		{#each board.squares as row, i}
			<ul class="row{i}">
				{#each row as square, j}
					<li class="col{j}">{square.text}</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>

<style>
	.board-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	ul.row0 {
		border-top: 2px solid #ee8c11aa;
	}

	ul.row4 {
		border-bottom: 2px solid #ee8c11aa;
	}

	.board li {
		border: 2px solid #ee8c11aa;
		flex: 1;
	}

	.board li.col0 {
		border-left: 4px solid #ee8c11aa;
	}

	.board li.col4 {
		border-right: 4px solid #ee8c11aa;
	}

	h1 {
		color: #ee11e1;
	}
</style>
