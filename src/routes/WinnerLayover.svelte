<script lang="ts">
	import WinnerTileScroller from './WinnerTileScroller.svelte';
	import { createEventDispatcher } from 'svelte';

	export let winningTiles: Tile[];

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('layoverRequestsClose');
	}

	function stopPropagation(event) {
		event.stopPropagation();
	}
</script>

<div class="winner-layover" on:click={close}>
	<div class="winner-container" on:click={stopPropagation}>
		<button class="close" type="button" on:click={close} />
		<h1>LET GO!</h1>
		<p>
			Layoffs are tough but you can take solace in the fact that you are not alone. Countless
			people have had the same emotions and heard the same words (cuz you just matched them!).
		</p>
		<h3>The clichés matched this round:</h3>
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
		color: #666;
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
		background: #f9a9f4;
		border: 8px solid #ee11e1;
		border-radius: 8px;
		padding: 1em;
		max-width: 480px;
		box-shadow: 8px 8px 8px #00000088;
		position: relative;
	}

	h1 {
		text-align: center;
	}
</style>
