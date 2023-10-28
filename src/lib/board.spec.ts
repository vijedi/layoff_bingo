import { describe, it, expect } from 'vitest';
import type { SelectedIds } from './board_types';
import { generateBoard, checkIfWinner } from './board';

describe('generateBoard', () => {
	it('should generate a 5x5 board', () => {
		const { tiles } = generateBoard(1);

		expect(tiles.length).toBe(5);
		const columnsWithout5 = tiles.filter((col) => col.length != 5);
		expect(columnsWithout5.length).toBe(0);
	});

	it('should have unique tiles', () => {
		const { tiles } = generateBoard(1);

		const ids = tiles.flat().map((t) => t.id);

		expect(new Set(ids).size).toBe(25);
	});

	it('should have a free space as the middle tile', () => {
		const { tiles } = generateBoard(1);
		expect(tiles[2][2].id).toBe('fr');
	});

	it('different seeds should have different tiles', () => {
		const { tiles: setA } = generateBoard(1);
		const { tiles: setB } = generateBoard(2);

		const idsA = setA.flat().map((t) => t.id);
		const idsB = setB.flat().map((t) => t.id);

		expect(idsA.join('')).not.toBe(idsB.join(''));
	});
});

describe('checkIfWinner', () => {
	it('returns false if not a winner', () => {
		const board = generateBoard(1);
		const selectedIds = {};
		expect(checkIfWinner(board, selectedIds)).toBeFalsy();
	});

	it('returns true if a column is selected', () => {
		const board = generateBoard(1);
		const selectedIds = board.tiles.reduce<SelectedIds>((acc, rows) => {
			acc[rows[0].id] = true;
			return acc;
		}, {});
		expect(checkIfWinner(board, selectedIds)).toBeTruthy();
	});

	it('returns true if a row is selected', () => {
		const board = generateBoard(1);
		const selectedIds = board.tiles[0].reduce<SelectedIds>((acc, tile) => {
			acc[tile.id] = true;
			return acc;
		}, {});
		expect(checkIfWinner(board, selectedIds)).toBeTruthy();
	});

	it('returns true if a diagonal is selected', () => {
		const board = generateBoard(1);
		const selectedIds = board.tiles.reduce<SelectedIds>((acc, row, index) => {
			acc[row[index].id] = true;
			return acc;
		}, {});
		expect(checkIfWinner(board, selectedIds)).toBeTruthy();
	});
});
