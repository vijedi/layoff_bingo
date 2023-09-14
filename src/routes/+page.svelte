<script lang="ts">
	import Square from './Square.svelte';
	import { generateBoard } from '$lib/board_content';

	const board = generateBoard();
</script>

<div class="board">
	<h1 class="title">L E T G O</h1>
	{#each board.squares as row}
		<ul>
			{#each row as square}
				<li>{square.text}</li>
			{/each}
		</ul>
	{/each}
</div>
