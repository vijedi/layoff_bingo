export interface Cliche {
	id: string;
	text: string;
	layoffIds: string[];
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
	readOnly: boolean;
	selected: boolean;
	quote: string;
	quoteAttribution: string;
	totalLayoffs: number;
	company?: Company;
}

export interface Board {
	tiles: Tile[][];
}
