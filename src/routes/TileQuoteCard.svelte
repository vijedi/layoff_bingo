<script lang="ts">
	import type { Tile } from '$lib/board_types';
	import { getLayoffInfo, parseLayoffDate } from '$lib/content_util';
	export let tile: Tile;

	const layoffInfo = getLayoffInfo(tile.cliche);
	const layoffDate = parseLayoffDate(layoffInfo.layoff.layoffId);
</script>

<div class="card">
	<div class="quote-container">
		<blockquote>
			{tile.cliche.text}
		</blockquote>
		<div class="quote-author">&emdash; {layoffInfo.company.name}, {layoffDate}</div>
	</div>
</div>

<style>
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
		content: '“';
		position: absolute;
		left: -0.7em;
	}

	.card blockquote:after {
		content: '”';
		margin-right: -1rem;
	}
</style>
