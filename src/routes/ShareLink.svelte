<script lang="ts">
	import type { BoardState } from '$lib/board/_types';
	import { encodeBoardState } from '$lib/board_state_util';
	import { page } from '$app/stores';

	export let boardState: boardState;
	const { origin, pathname } = $page.url;
	let encodedState: string = encodeBoardState(boardState);

	const updateBoardState = ({ target: { value } }) => {
		const withName: BoardState = {
			...boardState,
			playerName: value
		};

		encodedState = encodeBoardState(withName);
	};

	const selectAllText = (evt) => {
		const { target } = evt;
		target.select();
	};
</script>

<div class="share-container">
	<h4>Share your board</h4>
	<input name="name" placeholder="Enter your name" on:keyup={updateBoardState} />
	<label>Your custom share link</label>
	<div class="copy-area">
		<textarea readonly={true} rows="3" on:click={selectAllText}
			>{[origin, pathname, encodedState].join('')}</textarea
		>
	</div>
</div>

<style>
	h4 {
		padding: 0;
		margin: 0;
	}

	.share-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.share-container > * {
		display: inline-block;
	}

	.copy-area {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	input,
	textarea,
	button {
		border: 2px solid rgba(var(--secondary-highlight-color), 0.6);
		border-radius: 2px;
	}

	label {
		margin-top: 12px;
	}

	textarea {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	button {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		background: rgb(var(--secondary-highlight-color));
		color: white;
		font-weight: bold;
		cursor: pointer;
	}

	textarea {
		user-select: all;
		width: 80%;
		color: #888;
	}
</style>
