<script lang="ts">
	import type { Tile } from '$lib/board_types';
	export let winningTiles: Tile[];
	let cardIndex = 0;

	const moveForward = () => {
		cardIndex++;
		if (cardIndex >= winningTiles.length) {
			cardIndex = 0;
		}
	};

	const moveBackward = () => {
		cardIndex--;
		if (cardIndex < 0) {
			cardIndex = winningTiles.length - 1;
		}
	};
</script>

<div class="card-list">
	<div class="card-nav">
		<button type="button" on:click={moveBackward}>Prev</button>
		<div>{cardIndex + 1} of {winningTiles.length}</div>
		<button type="button" on:click={moveForward}>Next</button>
	</div>
	{#each winningTiles as tile, i}
		<div class="card" class:visible={cardIndex === i}>
			<div class="quote-container">
				<blockquote>
					{tile.cliche.text}
				</blockquote>
			</div>
		</div>
	{/each}
</div>

<style>
	.card-nav {
		display: flex;
		width: 100%;
	}
	.card-nav div {
		flex-grow: 1;
		text-align: center;
	}

	.card {
		display: none;
		border-radius: 6px;
		box-shadow: 2px 2px 5px #00000088;
		padding: 0.5em;
        background: #e1e1e1;
	}

    .quote-container {
        border-bottom: 1px solid #00000088;
    }

	.card blockquote {
		position: relative;
		letter-spacing: 0.03em;
		margin-bottom: 0.5rem;
        font-size: 1.1em;
	}

    .card blockquote:before {
        content: "“";
        position: absolute;
        left: -.7em;
    }
    
    .card blockquote:after {
        content: "”";
        margin-right: -1rem;
    }

	.card.visible {
		display: block;
	}
</style>
