<script lang="ts">
	import WinnerTileScroller from './WinnerTileScroller.svelte';
	export let winningTiles: Tile[];
</script>

<div class="winner-layover">
	<div class="winner-container">
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
	}

	h1 {
		text-align: center;
	}
</style>
