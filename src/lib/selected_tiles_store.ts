import type { SelectedIds } from './board_types';

import { writable } from 'svelte/store';

export const selectedTilesStore = writable<SelectedIds>({});

export const initSelectedTiles = (selected: string[]) => {
	const asMap = selected.reduce<SelectedIds>((map, selected) => {
		map[selected] = true;
		return map;
	}, {});

	selectedTilesStore.set(asMap);
};
