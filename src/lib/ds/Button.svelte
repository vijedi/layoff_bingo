<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let color = null;
</script>

<button type="button" on:click class:orange={color === 'orange'}><slot /></button>

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

	button.orange {
		background: rgb(var(--primary-highlight-color));
		border: 2px solid rgb(var(--primary-highlight-color));
	}
</style>
