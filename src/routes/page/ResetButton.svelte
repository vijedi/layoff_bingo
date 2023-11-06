<script lang="ts">
	import { clearState } from '$lib/board_state_util';
	import { page } from '$app/stores';
	import Button from '$lib/ds/Button.svelte';

	function clear() {
		console.log('here');
		clearState($page);
	}
</script>

<div class="button-container">
	<Button color="dark" on:click={clear}>Reset Board</Button>
</div>

<style>
	.button-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4em 0 0em 0;
	}
</style>
