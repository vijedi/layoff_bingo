<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function generate() {
		dispatch('generateBoard');
	}
</script>

<div class="button-container">
	<button type="button" on:click={generate}>Generate Board</button>
</div>

<style>
	.button-container {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
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
</style>
