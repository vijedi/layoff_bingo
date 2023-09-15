import type { Tile, Board } from './board_types';
import { cliches } from './board_content';

/**
 * Generates a board from the potential candidates
 * @returns a 5x5 matrix of board squares
 */
export function generateBoard(): Board {
	// We are going to manipulate this list so we need to make a copy
	const candidates = [...cliches];

	const tiles: Tile[][] = [[], [], [], [], []];
	for (let row = 0; row < 5; row++) {
		tiles[row] = [];
		for (let col = 0; col < 5; col++) {
			if (col == 2 && row == 2) {
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
