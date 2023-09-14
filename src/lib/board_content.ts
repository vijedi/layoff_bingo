export interface Square {
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
	description: string;
}

export interface Board {
	squares: Square[][];
	layoffs: Map<string, Layoff>;
	companies: Map<string, Layoff>;
}

const companies: Company[] = [
	{
		companyId: 'evernote',
		description:
			'Evernote was one of the first Silicon Valley "Unicorns" (private companies that were worth more than $1bn). I used to be a paid user of their subscription services, but like most others started finding it less useful as time went on and stopped paying. A darling no more, Evernote has been in a steady decline.'
	},
	{
		companyId: 'headspace',
		description: 'Headspace is an licensed medical provider and online mental health platform.'
	},
	{
		companyId: 'lyft',
		description:
			'Touted as a friendly Uber, Lyft has always been second fiddle in the driver gig space. Though they have expanded into other forms of mobility, they continue to be a low margin business that relies on investment to sustain operations.'
	},
	{
		companyId: 'meta',
		description:
			"Started at Harvard by Mark Zuckerberg to creep on co-eds then work out his Machiavellian desires, Facebook is now the largest social network in the world far eclipsing Nextdoor's ability to  amplify the racist ramblings of angry old people. Exceeding its original vision, Facebook has created platforms for younger, attention starved influencers (Instagram) and  an even better way for old people to spread misinformation and racist rants (Whatsapp)."
	},
	{
		companyId: 'ea',
		description:
			'An early pioneer in home video gaming, Electronic Arts has had the most success recently by offering the same game with updated stats year after year through its sport franchises. Not satisfied with this mechanism of "extracting value" the company has recently moved to add as many microtransactions as possible to further blur the lines between gaming and work.'
	},
	{
		companyId: 'lucid',
		description:
			'Another EV car startup, Lucid started delivering their high-priced, high-powered cars in 2022. Plagued supply chain issues and demand, output has been far lower than expectations thus far.'
	},
	{
		companyId: 'indeed',
		description:
			'Indeed is a jobsearch engine that aggregates information from multiple job postings across the web.'
	},
	{
		companyId: 'glassdoor',
		description:
			'Glassdoor gives the opportunity for employees to rate their employer. Purportedly for allowing for good candidate decisions, the site is mostly used by kool-aid drinkers to  profess their company love while their disgruntled counterparts get the opportunity to vent.'
	},
	{
		companyId: 'amazon',
		description:
			'One of the biggest employers in the world, Amazon has long since moved from being just the everything store to an everything company.'
	},
	{
		companyId: 'atlassian',
		description:
			'Atlassian is one of the leaders in software collaboration products and rode the Agile wave especially well with Jira and Confluence.'
	},
	{
		companyId: 'twitter',
		description:
			'Once the social media darling of the journalist and political world, the takeover by a rich man-child turned it into the online equivalent of Fox News.'
	},
	{
		companyId: 'rapid7',
		description: 'TBD'
	},
	{
		companyId: 'hackerone',
		description: 'TBD'
	},
	{
		companyId: 'planet',
		description: 'TBD'
	},
	{
		companyId: 'niantic',
		description: 'TBD'
	}
];

const layoffs: Layoff[] = [
	{
		layoffId: 'evernote_07_23',
		companyId: 'evernote',
		description:
			'Evernote decided to consolidate all of their operations to Europe and laid off all of their staff in the Americas.',
		url: 'https://evernote.com/blog/moving-the-evernote-center-of-operations-to-europe/'
	},
	{
		layoffId: 'headspace_06_23',
		companyId: 'headspace',
		description:
			'Headspace went through another round of cuts to get towards profitability, including cuts to active therapists immediately severing their established care relationships. No word on whether the layoffs included free stress counseling from Headspace.',
		url: 'https://news.ycombinator.com/item?id=36526525'
	},
	{
		layoffId: 'lyft_04_23',
		companyId: 'lyft',
		description:
			'Lyft laid off 1,200 jobs in an effort to increase margins due to the challenges of raising additional capital for operations.',
		url: 'https://www.lyft.com/blog/posts/a-note-from-lyfts-ceo-david-risher'
	},
	{
		layoffId: 'meta_04_23',
		companyId: 'meta',
		description:
			'As another effort in the year of efficiency Zuckerberg made significant cuts in his VR boondoggle, probably to appease complaining investors as add revenues have been impacted. A likely casualty of these cuts is the project to add legs to VR avatars.',
		url: 'https://about.fb.com/news/2023/03/mark-zuckerberg-meta-year-of-efficiency'
	},
	{
		layoffId: 'ea_03_23',
		companyId: 'ea',
		description:
			'Perhaps concluding that it could make a reskin of last years game with much fewer people, EA announced that it would layoff about 6% of its workforce who were "not contributing to the strategy"',
		url: 'https://www.ea.com/news/update-to-our-business-march-2023'
	},
	{
		layoffId: 'lucid_03_23',
		companyId: 'lucid',
		description:
			'Possbily due to the saturation of the market for $100,000+ EV cars along with a potential drop in demand due to "macro economic conditions," Lucid decided that the best way to hit production targets was to remove some of the workforce. I\'m not sure that was the lesson that was supposed to be be taken from the "Mythical Man-Month."',
		url: 'https://www.autoweek.com/news/green-cars/a43466007/lucid-motors-layoffs/'
	},
	{
		layoffId: 'indeed_03_23',
		companyId: 'indeed',
		description:
			"It's never a good sign when a company responsible for finding people jobs reduces headcount. Citing hiring trends the CEO decided that the company was simply too big.",
		url: 'https://www.indeed.com/press/releases/a-message-from-our-ceo-chris-hyams?co=US'
	},
	{
		layoffId: 'glassdoor_03_23',
		companyId: 'glassdoor',
		description:
			'Like their sister company Indeed, Glassdoor suffered from the downturn in US based hiring and decided to contribute to the problem.',
		url: 'https://www.glassdoor.com/about/press-release//a-message-from-glassdoor-ceo-christian-sutherland-wong/'
	},
	{
		layoffId: 'amazon_03_23',
		companyId: 'amazon',
		description:
			'It seems that in the effort to get everyone back in the office, Amazon realized that either had to buy more desks or reduce headcount. It chose the latter.',
		url: 'https://www.aboutamazon.com/news/company-news/update-from-ceo-andy-jassy-on-amazons-operating-plan-and-additional-role-eliminations'
	},
	{
		layoffId: 'atlassian_03_23',
		companyId: 'atlassian',
		description:
			'Atlassian decided to rebalance their business in light of tough economic conditions. They were clear that this was a strategic shift in which roles they thought were important, not anything to do with current revenues.',
		url: 'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001650372/dc07e25f-4918-4383-87b6-d0ed37837344.pdf#page=4&zoom=100,24,24'
	},
	{
		layoffId: 'twitter_11_22',
		companyId: 'twitter',
		description: 'Post Elon Twitter was all about reducing headcount. This was just the start.',
		url: 'https://archive.ph/KrpUY'
	},
	{
		layoffId: 'rapid7_08_23',
		companyId: 'rapid7',
		description: "In a restructuring to cut costs, Rapid7 laid off 18% of it's workforce.",
		url: 'https://www.rapid7.com/blog/post/2023/08/08/a-message-from-rapid7-ceo-corey-thomas/'
	},
	{
		layoffId: 'hackerone_08_23',
		companyId: 'hackerone',
		description: 'Another situation of a changing environment causing the need to downsize',
		url: 'https://www.hackerone.com/ceo/company-update'
	},
	{
		layoffId: 'planet_08_23',
		companyId: 'planet',
		description: 'The company got to heavy and slow',
		url: 'https://www.planet.com/pulse/a-note-from-our-ceo/'
	},
	{
		layoffId: 'niantic_06_23',
		companyId: 'niantic',
		description:
			'Another case of over expansion during the pandemic with the belief that customer behavior had changed for good instead of being a temporary blip.',
		url: 'https://nianticlabs.com/news/organizational-update'
	}
];
const squares: Square[] = [
	{
		id: '000',
		text: 'boost operational efficiency',
		layoffIds: ['evernote_07_23', 'meta_04_23']
	},
	{
		id: '001',
		text: 'impacted individuals',
		layoffIds: ['evernote_07_23', 'indeed_03_23', 'glassdoor_03_23', 'amazon_03_23']
	},
	{
		id: '002',
		text: 'ambitious plans',
		layoffIds: ['evernote_07_23']
	},
	{
		id: '003',
		text: 'I take full accountability',
		layoffIds: ['headspace_06_23', 'indeed_03_23', 'hackerone_08_23']
	},
	{
		id: '004',
		text: 'current (macro) economic environment',
		layoffIds: [
			'headspace_06_23',
			'glassdoor_03_23',
			'atlassian_03_23',
			'hackerone_08_23',
			'planet_08_23'
		]
	},
	{
		id: '005',
		text: 'optimism got the best of us',
		layoffIds: ['headspace_06_23']
	},
	{
		id: '006',
		text: 'hard calls',
		layoffIds: ['headspace_06_23']
	},
	{
		id: '007',
		text: 'difficult capital markets',
		layoffIds: ['headspace_06_23']
	},
	{
		id: '008',
		text: 'opportunity to be profitable',
		layoffIds: ['headspace_06_23', 'lyft_04_23', 'planet_08_23']
	},
	{
		id: '009',
		text: 'closer to our purpose',
		layoffIds: ['lyft_04_23']
	},
	{
		id: '010',
		text: 'difficult environment',
		layoffIds: ['meta_04_23']
	},
	{
		id: '011',
		text: 'period of uncertainty',
		layoffIds: ['meta_04_23', 'ea_03_23', 'amazon_03_23']
	},
	{
		id: '012',
		text: 'new economic reality',
		layoffIds: ['meta_04_23']
	},
	{
		id: '013',
		text: 'position of strength',
		layoffIds: ['ea_03_23']
	},
	{
		id: '014',
		text: 'lead this transformation',
		layoffIds: ['ea_03_23']
	},
	{
		id: '015',
		text: 'evolving business needs',
		layoffIds: ['lucid_03_23']
	},
	{
		id: '016',
		text: 'cost discipline',
		layoffIds: ['lucid_03_23']
	},
	{
		id: '017',
		text: 'heartbroken',
		layoffIds: ['indeed_03_23']
	},
	{
		id: '018',
		text: 'investing in our future',
		layoffIds: ['indeed_03_23']
	},
	{
		id: '019',
		text: 'affect those who are staying',
		layoffIds: ['indeed_03_23']
	},
	{
		id: '020',
		text: 'remain focused',
		layoffIds: ['glassdoor_03_23']
	},
	{
		id: '021',
		text: 'support each other',
		layoffIds: ['glassdoor_03_23']
	},
	{
		id: '022',
		text: 're-prioritization',
		layoffIds: ['amazon_03_23']
	},
	{
		id: '023',
		text: 'optimistic about the future',
		layoffIds: ['amazon_03_23']
	},
	{
		id: '024',
		text: 'rebalance',
		layoffIds: ['atlassian_03_23']
	},
	{
		id: '025',
		text: 'valuable contributions',
		layoffIds: ['twitter_11_22', 'planet_08_23']
	},
	{
		id: '026',
		text: 'healthy path',
		layoffIds: ['twitter_11_22']
	},
	{
		id: '027',
		text: 'place of strength',
		layoffIds: ['rapid7_08_23']
	},
	{
		id: '028',
		text: 'long term success',
		layoffIds: ['rapid7_08_23']
	},
	{
		id: '029',
		text: 'scale intentionally',
		layoffIds: ['rapid7_08_23']
	},
	{
		id: '030',
		text: 'painful and necessary',
		layoffIds: ['hackerone_08_23']
	},
	{
		id: '031',
		text: 'shifts in our market',
		layoffIds: ['hackerone_08_23']
	},
	{
		id: '032',
		text: 'one-time event',
		layoffIds: ['hackerone_08_23']
	},
	{
		id: '033',
		text: 'historically understaffed',
		layoffIds: ['planet_08_23']
	},
	{
		id: '034',
		text: 'narrow focus',
		layoffIds: ['niantic_06_23']
	},
	{
		id: '035',
		text: 'unique challenges',
		layoffIds: ['niantic_06_23']
	},
	{
		id: '036',
		text: 'streamline processes',
		layoffIds: ['niantic_06_23']
	}
];

export function generateBoard(): Board {
	const workingSet = [...squares];

	const boardSquares: Square[][] = [[], [], [], [], []];
	for (let row = 0; row < 5; row++) {
		boardSquares[row] = [];
		for (let col = 0; col < 5; col++) {
			const squareIndex = Math.floor(Math.random() * workingSet.length);
			boardSquares[row].push(workingSet[squareIndex]);
			workingSet.splice(squareIndex, 1);
		}
	}

	return {
		squares: boardSquares
	};
}
