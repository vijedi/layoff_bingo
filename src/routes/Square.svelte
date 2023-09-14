<script>
	export let content;
</script>

<button type="button">
	<div class="button-content">
		{content.text}
	</div>
</button>

<style>
	button {
		background: transparent;
		border: 0;
		margin: 0;
		padding: 0;
		align-items: center;
		height: 100%;
		width: 100%;
		display: block;
		overflow-wrap: break-word;
	}

	.button-content {
		text-align: center;
		flex-shrink: 0;
		padding: 0.1em;
		font-size: 1.4em;
		overflow-wrap: break-word;
	}
</style>
