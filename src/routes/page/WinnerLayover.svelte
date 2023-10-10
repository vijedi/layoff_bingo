<script lang="ts">
	import WinnerTileScroller from './WinnerTileScroller.svelte';
	import ShareLink from './ShareLink.svelte';
	import { createEventDispatcher } from 'svelte';

	export let boardState: boardState;
	export let winningTiles: Tile[];

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('layoverRequestsClose');
	}

	function stopPropagation(event) {
		event.stopPropagation();
	}

	function noop() {
		// keypresses are handled by a global handler
	}
</script>

<div class="winner-layover" on:click={close} on:keyup={noop} role="region">
	<div class="winner-container" on:click={stopPropagation} on:keyup={noop} role="dialog">
		<button class="close" type="button" on:click={close} />
		<h1>LET GO!</h1>
		<p>
			Layoffs are tough but you can take solace in the fact that you are not alone. Countless
			people have had the same emotions and you just proved they heard the same words!
		</p>
		<ShareLink {boardState} />
		<h3>This board matched</h3>
		<WinnerTileScroller {winningTiles} />
	</div>
</div>

<style>
	button.close {
		background: transparent;
		border: 0;
		padding: 0;
		margin: 0;
		font-size: 2.5em;
		height: 0.8em;
		width: 0.8em;
		line-height: 0.8em;
		display: inline-block;
		position: absolute;
		top: 0;
		right: 0;
		cursor: pointer;
		color: rgb(var(--secondary-highlight-color));
		transition: all 0.3s ease-out;
	}

	button.close:after {
		display: inline-block;
		content: '\00d7'; /* This will render the 'X' */
	}

	button.close:hover:after {
		display: inline-block;
		content: '\00d7'; /* This will render the 'X' */
		font-size: 1.2em;
	}

	.winner-layover {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background: #00000088;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.winner-container {
		background: rgb(var(--secondary-highlight-color-lighter));
		border: 8px solid rgb(var(--secondary-highlight-color));
		border-radius: 8px;
		padding: 1em;
		max-width: 480px;
		box-shadow: 8px 8px 8px #00000000;
		position: relative;
	}

	h1,
	h3 {
		text-align: center;
	}

	h3 {
		margin-bottom: 0.25em;
	}
</style>
