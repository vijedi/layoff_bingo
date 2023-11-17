import type { Layoff, Company, Cliche } from './board_types';
import { LAYOFFS, COMPANIES } from './board_content';

export const getLayoffInfo = (
	cliche: Cliche
): { layoff: Layoff; company: Company; fullQuote: string } => {
	const layoffDetail = sample(cliche.layoffs);

	const layoffId = layoffDetail.id;
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
		company,
		fullQuote: layoffDetail.quote
	};
};

export const parseLayoffDate = (layoffId: string): string => {
	const [, month, year] = layoffId.split('_');
	const monthStr = Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(parseInt(month)));
	return `${monthStr} ${year}`;
};

const sample = <Type>(array: Type[]): Type => array[Math.floor(Math.random() * array.length)];
