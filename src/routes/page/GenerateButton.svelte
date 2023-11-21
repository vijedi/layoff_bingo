<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function generate() {
		dispatch('generateBoard');
	}
</script>

<div class="button-container">
	<div>
		<h3 style="margin-bottom: 1em">How to Play</h3>
		<ul class="instructions">
			<li>Find unplanned "All Hands" on your calendar</li>
			<li>Make a quick appraisal of personal finances</li>
			<li>Generate a board</li>
			<li>Mark the clichés you hear, hopefully before you are let go</li>
		</ul>
	</div>
	<div>
		<button type="button" on:click={generate}>Generate Board</button>
	</div>
</div>

<style>
	.button-container {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	button {
		background: rgb(var(--primary-highlight-color));
		border: 0;
		padding: 1em;
		font-weight: bold;
		color: white;
		cursor: pointer;
		text-transform: uppercase;
		border-radius: 4px;
		padding: 1.5em;
		transition: all 0.4s ease-out;
	}

	button:hover {
		letter-spacing: 1px;
	}

	ul {
		list-style-type: '➢';
		margin-left: -0.5em;
		margin-bottom: 2em;
	}

	li {
		padding: 0.3em 0 0.3em 0.5em;
	}
</style>
