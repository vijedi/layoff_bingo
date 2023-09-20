import type { Tile, Board } from './board_types';
import { cliches } from './board_content';

const GRID_SIZE = 5;
const GRID_MIDDLE = Math.floor(GRID_SIZE / 2);

/**
 * Generates a board from the potential candidates
 * @returns a 5x5 matrix of board squares
 */
export function generateBoard(): Board {
	// We are going to manipulate this list so we need to make a copy
	const candidates = [...cliches];

	const tiles: Tile[][] = [[], [], [], [], []];
	for (let row = 0; row < GRID_SIZE; row++) {
		tiles[row] = [];
		for (let col = 0; col < GRID_SIZE; col++) {
			if (col == GRID_MIDDLE && row == GRID_MIDDLE) {
				tiles[row].push(generateFreeSpace());
			} else {
				const candidateIndex = Math.floor(Math.random() * candidates.length);
				tiles[row].push({
					cliche: candidates[candidateIndex],
					selected: false
				});
				candidates.splice(candidateIndex, 1);
			}
		}
	}

	return {
		tiles
	};
}

/**
 * Generates the free space on the board
 */
function generateFreeSpace(): Tile {
	return {
		cliche: {
			id: 'free',
			text: 'Free Time'
		},
		selected: true
	};
}

/**
 * Check if this is a winning board.
 * A winnig board is defined as all items are selected in a row, column, or on a diagonal
 *
 * @param {Board} board - the board to check for winning conditions
 * @returns {boolean} true if the board is a winner via game rules
 */
export function checkIfWinner(board: Board): boolean {
	const tiles = board.tiles;
	// Just do this dumb for now. If somoene wants to dig me in an interview for it, so be it
	return checkRows(tiles) || checkColumns(tiles) || checkDiagonals(tiles);
}

function checkRows(tiles: Tile[][]): boolean {
	for (let row = 0; row < GRID_SIZE; row++) {
		const anyUnselected = tiles[row].find((tile: Tile) => !tile.selected);
		if (!anyUnselected) {
			return true;
		}
	}

	return false;
}

function checkColumns(tiles: Tile[][]): boolean {
	for (let col = 0; col < GRID_SIZE; col++) {
		let row = 0;
		for (; row < GRID_SIZE; row++) {
			if (!tiles[row][col].selected) {
				break;
			}
		}

		if (row == GRID_SIZE) {
			return true;
		}
	}

	return false;
}

function checkDiagonals(tiles: Tile[][]): boolean {
	let pos = 0;
	for (; pos < GRID_SIZE; pos++) {
		if (!tiles[pos][pos].selected) {
			break;
		}
	}

	if (pos == GRID_SIZE) {
		return true;
	}

	pos = GRID_SIZE - 1;
	for (; pos >= 0; pos--) {
		const row = GRID_SIZE - (pos + 1);
		if (!tiles[row][pos].selected) {
			break;
		}
	}
	return pos < 0;
}
