<script lang="ts">
	import Layover from '$lib/ds/Layover.svelte';
	import WinnerTileScroller from './WinnerTileScroller.svelte';
	import ShareLink from './ShareLink.svelte';

	export let boardState: boardState;
	export let winningTiles: Tile[];
</script>

<Layover on:layoverRequestsClose>
	<h1>LET GO!</h1>
	{#if boardState.isSharedBoard}
		<h3>{boardState.playerName || 'Your friend'} has a winning board!</h3>
		<p>
			They heard some of the most common phrases used by leaders when letting people go. See
			all the details on what they heard.
		</p>
	{:else}
		<p>
			Layoffs are tough but you can take solace in the fact that you are not alone. Countless
			people have had the same emotions and you just proved they heard the same words!
		</p>
		<ShareLink {boardState} />
	{/if}
	<h3>This board matched</h3>
	<WinnerTileScroller {winningTiles} />
</Layover>

<style>
	h1,
	h3 {
		text-align: center;
	}

	h1,
	p {
		margin-bottom: 0.75em;
	}

	h3 {
		margin-top: 1.25em;
		margin-bottom: 0.25em;
	}
</style>
