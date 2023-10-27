import 'vitest-dom/extend-expect';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import type { Tile } from '$lib/board_types';
import Component from './Tile.svelte';
import { isCompactMode } from '$lib/ds/layout_helper';
import { selectedTilesStore } from '$lib/selected_tiles_store';

vi.mock('$lib/ds/layout_helper', () => {
	return {
		isCompactMode: vi.fn()
	};
});

describe('Tile', () => {
	const tile: Tile = {
		id: 'test',
		quote: 'Test Quote',
		readOnly: false,
		quoteAttribution: 'This quote is a test',
		totalLayoffs: 1
	};

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('should render the id in compact mode', () => {
		vi.mocked(isCompactMode).mockReturnValue(true);

		render(Component, { props: { tile } });
		const text = screen.getByText(tile.id);
		expect(text).toBeInTheDocument();
	});

	it('should render the quote in normal mode', () => {
		vi.mocked(isCompactMode).mockReturnValue(false);

		render(Component, { props: { tile } });
		const text = screen.getByText(tile.quote);
		expect(text).toBeInTheDocument();
	});

	it('should update the store when not read only', () => {
		const spy = vi.spyOn(selectedTilesStore, 'update');
		render(Component, { props: { tile } });

		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(spy).toHaveBeenCalledOnce();
	});

	it('should not perform updates when read only', () => {
		const spy = vi.spyOn(selectedTilesStore, 'update');
		const readOnlyTile = {
			...tile,
			readOnly: true
		};
		render(Component, { props: { tile: readOnlyTile } });

		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(spy).not.toBeCalled();
	});
});
