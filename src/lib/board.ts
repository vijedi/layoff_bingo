import seedrandom from 'seedrandom';
import type { Tile, Board, SelectedIds } from './board_types';
import { CLICHES, FREE_SPACE } from './board_content';
import { getLayoffInfo, parseLayoffDate } from '$lib/content_util';

const GRID_SIZE = 5;
const GRID_MIDDLE = Math.floor(GRID_SIZE / 2);

/**
 * Generates a board from the potential candidates
 * @returns a 5x5 matrix of board squares
 */
export function generateBoard(seed: number, readOnly = false): Board {
	// We are going to manipulate this list so we need to make a copy
	const candidates = [...CLICHES];

	const rng = seedrandom(seed);

	const tiles: Tile[][] = [[], [], [], [], []];
	for (let row = 0; row < GRID_SIZE; row++) {
		tiles[row] = [];
		for (let col = 0; col < GRID_SIZE; col++) {
			if (col == GRID_MIDDLE && row == GRID_MIDDLE) {
				tiles[row].push(generateFreeSpace());
			} else {
				const candidateIndex = Math.floor(rng() * candidates.length);
				const cliche = candidates[candidateIndex];

				const layoffInfo = getLayoffInfo(cliche);
				const layoffDate = parseLayoffDate(layoffInfo.layoff.layoffId);
				const company = layoffInfo.company;

				tiles[row].push({
					id: cliche.id,
					readOnly,
					quote: cliche.text,
					quoteAttribution: `${company.name}, ${layoffDate}`,
					totalLayoffs: cliche.layoffIds.length,
					layoff: layoffInfo.layoff,
					company
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
		...FREE_SPACE,
		readOnly: true
	};
}

/**
 * Check if this is a winning board.
 * A winnig board is defined as all items are selected in a row, column, or on a diagonal
 *
 * @param {Board} board - the board to check for winning conditions
 * @returns {boolean} true if the board is a winner via game rules
 */
export function checkIfWinner(board: Board, selectedIdMap: SelectedIds): Tile[] | null {
	return winnerEvaluator(board, selectedIdMap).evaluate();
}

function winnerEvaluator(board: Board, selectedIdMap: SelectedIds) {
	const tiles = board.tiles;

	function checkIterate(getTile: (outer: number, inner: number) => Tile, outer?: number) {
		const selected = [];
		for (let inner = 0; inner < GRID_SIZE; inner++) {
			const tile = getTile(typeof outer == 'number' ? outer || 0 : inner, inner);
			if (selectedIdMap[tile.id]) {
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

	function checkRows(): Tile[] | null {
		// treat the outer iteration as rows and the inner iteration as columns
		return checkOuterIterate((outer, inner) => tiles[outer][inner]);
	}

	function checkColumns(): Tile[] | null {
		// treat the outer iteration as columns and the inner iteration as rows
		return checkOuterIterate((outer, inner) => tiles[inner][outer]);
	}

	function checkDiagonals(): Tile[] | null {
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

	// There's a way to do this where you don't look at the same box twice, but it takes
	// more memory and takes more time to write. This should be trivially quick and this
	// approach is relatively easy to understand on a revisit.
	const evaluate = () => checkRows() || checkColumns() || checkDiagonals();

	return {
		evaluate
	};
}
