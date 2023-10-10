<script lang="ts">
	import Layover from '$lib/ds/Layover.svelte';
	import WinnerTileScroller from './WinnerTileScroller.svelte';
	import ShareLink from './ShareLink.svelte';

	export let boardState: boardState;
	export let winningTiles: Tile[];
</script>

<Layover on:layoverRequestsClose>
	<h1>LET GO!</h1>
	<p>
		Layoffs are tough but you can take solace in the fact that you are not alone. Countless
		people have had the same emotions and you just proved they heard the same words!
	</p>
	<ShareLink {boardState} />
	<h3>This board matched</h3>
	<WinnerTileScroller {winningTiles} />
</Layover>

<style>
	h1,
	h3 {
		text-align: center;
	}

	h3 {
		margin-bottom: 0.25em;
	}
</style>
