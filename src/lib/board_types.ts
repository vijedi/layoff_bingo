export interface Cliche {
	id: string;
	text: string;
	layoffs: {
		id: string;
		quote: string;
	}[];
}

export interface Layoff {
	layoffId: string;
	companyId: string;
	description: string;
	url: string;
}

export interface Company {
	companyId: string;
	name: string;
	description: string;
}

export interface Tile {
	id: string;
	readOnly: boolean;
	quote: string;
	quoteAttribution: string;
	totalLayoffs: number;
	company?: Company;
	layoff?: Layoff;
}

export interface Board {
	tiles: Tile[][];
}

export interface BoardState {
	selected: string[];
	seed?: number;
	isSharedBoard?: boolean;
	playerName?: string;
}

export interface SelectedIds {
	[key: string]: boolean | null;
}
