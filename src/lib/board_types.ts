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
	selected: boolean;
	cliche: Cliche;
}

export interface Board {
	tiles: Tile[][];
	layoffs: Map<string, Layoff>;
	companies: Map<string, Layoff>;
}
