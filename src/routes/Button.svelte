<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function forwardClick(evt) {
		dispatch('click', evt);
	}
</script>

<button type="button" on:click={forwardClick}><slot /></button>

<style>
	button {
		text-transform: uppercase;
		background: rgb(var(--secondary-highlight-color));
		border: 2px solid rgb(var(--secondary-highlight-color));
		border-radius: 2px;
		color: white;
		font-weight: bold;
		padding: 0.3em 1em;
		cursor: pointer;
		transition: all 0.4s ease-out;
	}

	button:hover {
		letter-spacing: 1px;
	}
</style>
