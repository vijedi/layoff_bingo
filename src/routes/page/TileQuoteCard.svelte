<script lang="ts">
	import type { Tile } from '$lib/board_types';
	import { getLayoffInfo, parseLayoffDate } from '$lib/content_util';
	export let tile: Tile;
</script>

<div class="card">
	<div class="quote-container">
		<blockquote>
			{tile.quote}
		</blockquote>
		<div class="quote-author">
			&mdash; {tile.quoteAttribution}
			{#if tile.totalLayoffs > 0} and {tile.totalLayoffs} more{/if}
		</div>
	</div>
	{#if tile.company}
		<div class="company-container">
			<h4>About this layoff</h4>
			<p class="about">{tile.layoff.description}</p>

			<h4>About {tile.company.name}</h4>
			<p class="about">{tile.company.description}</p>
		</div>
	{/if}
</div>

<style>
	.card {
		border-radius: 6px;
		box-shadow: 2px 2px 5px #00000088;
		padding: 0.5em;
		background: #e1e1e1;
	}

	.quote-container {
		padding-bottom: 0.25em;
		border-bottom: 1px solid #00000088;
		margin-bottom: 0.25em;
	}

	.company-container {
		padding-top: 1em;
	}

	.card h4 {
		font-weight: 600;
		margin-bottom: 0.5em;
	}

	.card p {
		margin-bottom: 1em;
	}

	.card blockquote {
		position: relative;
		letter-spacing: 0.03em;
		padding: 0;
		margin: 0.5rem;
		font-size: 1.1em;
	}

	.card blockquote:before {
		content: '“';
		position: absolute;
		left: -0.5em;
	}

	.card blockquote:after {
		content: '”';
		margin-right: -1rem;
	}

	.card .quote-author {
		font-size: 0.8em;
	}
</style>
