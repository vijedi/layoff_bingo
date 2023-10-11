import { writable } from 'svelte/store';

export const selectedTilesStore = writable<[string: boolean | null] | null>(null);

export const initSelectedTiles = (selected: string[]) => {
	const asMap = selected.reduce<[string: boolean | null]>((map, selected) => {
		return {
			...map,
			[selected]: true
		};
	}, {} as [string: boolean | null]);

	selectedTilesStore.set(asMap);
};
