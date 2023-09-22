import type { Layoff, Company, Cliche } from './board_types';
import { LAYOFFS, COMPANIES } from './board_content';

export const getLayoffInfo = (cliche: Cliche): { layoff: Layoff; company: Company } => {
	const layoffId = sample(cliche.layoffIds);

	const layoff = LAYOFFS.find((layoff) => layoff.layoffId === layoffId);
	if (!layoff) {
		throw new Error(`Data Error: layoffId ${layoffId} not found!`);
	}

	const company = COMPANIES.find((company) => company.companyId === layoff.companyId);
	if (!company) {
		throw new Error(`Data Error: companyId ${layoff.companyId} not found!`);
	}

	return {
		layoff,
		company
	};
};

export const parseLayoffDate = (layoffId: string): string => {
	const [, month, year] = layoffId.split('_');
	const monthStr = Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(month));
	return `${monthStr} ${year}`;
};

const sample = <Type>(array: Type[]): Type => array[Math.floor(Math.random() * array.length)];
