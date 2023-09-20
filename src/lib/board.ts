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
export function checkIfWinner(board: Board): Tile[] | null {
	const tiles = board.tiles;
	// There's a way to do this where you don't look at the same box twice, but it takes
	// more memory and takes more time to write. This should be trivially quick and this
	// approach is relatively easy to understand on a revisit.
	return checkRows(tiles) || checkColumns(tiles) || checkDiagonals(tiles);
}

function checkIterate(getTile: (outer: number, inner: number) => Tile, outer?: number) {
	const selected = [];
	for (let inner = 0; inner < GRID_SIZE; inner++) {
		const tile = getTile(typeof outer == 'number' ? outer || 0 : inner, inner);
		if (tile.selected) {
			selected.push(tile);
		} else {
			break;
		}
	}

	return selected;
}

function checkOuterIterate(getTile: (outer: number, inner: number) => Tile) {
	for (let outer = 0; outer < GRID_SIZE; outer++) {
		const selected = checkIterate(getTile, outer);

		if (selected.length == GRID_SIZE) {
			return selected;
		}
	}

	return null;
}

function checkRows(tiles: Tile[][]): Tile[] | null {
	// treat the outer iteration as rows and the inner iteration as columns
	return checkOuterIterate((outer, inner) => tiles[outer][inner]);
}

function checkColumns(tiles: Tile[][]): Tile[] | null {
	// treat the outer iteration as columns and the inner iteration as rows
	return checkOuterIterate((outer, inner) => tiles[inner][outer]);
}

function checkDiagonals(tiles: Tile[][]): Tile[] | null {
	let selected = checkIterate((pos) => tiles[pos][pos]);
	if (selected.length == GRID_SIZE) {
		return selected;
	}

	selected = checkIterate((pos) => tiles[GRID_SIZE - 1 - pos][pos]);
	if (selected.length == GRID_SIZE) {
		return selected;
	}
	return null;
}
