import type { Cliche, Layoff, Company } from './board_types';

export const COMPANIES: Company[] = [
	{
		companyId: 'evernote',
		name: 'Evernote',
		description:
			'Evernote was one of the first Silicon Valley "Unicorns" (private companies that were worth more than $1bn). I used to be a paid user of their subscription services, but like most others started finding it less useful as time went on and stopped paying. A darling no more, Evernote has been in a steady decline.'
	},
	{
		companyId: 'headspace',
		name: 'Headspace',
		description: 'Headspace is an licensed medical provider and online mental health platform.'
	},
	{
		companyId: 'lyft',
		name: 'Lyft',
		description:
			'Touted as a friendly Uber, Lyft has always been second fiddle in the driver gig space. Though they have expanded into other forms of mobility, they continue to be a low margin business that relies on investment to sustain operations.'
	},
	{
		companyId: 'meta',
		name: 'Meta',
		description:
			"Started at Harvard by Mark Zuckerberg to creep on co-eds then work out his Machiavellian desires, Facebook is now the largest social network in the world far eclipsing Nextdoor's ability to  amplify the racist ramblings of angry old people. Exceeding its original vision, Facebook has created platforms for younger, attention starved influencers (Instagram) and  an even better way for old people to spread misinformation and racist rants (Whatsapp)."
	},
	{
		companyId: 'ea',
		name: 'Electronic Arts',
		description:
			'An early pioneer in home video gaming, Electronic Arts has had the most success recently by offering the same game with updated stats year after year through its sport franchises. Not satisfied with this mechanism of "extracting value" the company has recently moved to add as many microtransactions as possible to further blur the lines between gaming and work.'
	},
	{
		companyId: 'lucid',
		name: 'Lucid Motors',
		description:
			'Another EV car startup, Lucid started delivering their high-priced, high-powered cars in 2022. Plagued supply chain issues and demand, output has been far lower than expectations thus far.'
	},
	{
		companyId: 'indeed',
		name: 'Indeed',
		description:
			'Indeed is a jobsearch engine that aggregates information from multiple job postings across the web.'
	},
	{
		companyId: 'glassdoor',
		name: 'Glassdoor',
		description:
			'Glassdoor gives the opportunity for employees to rate their employer. Purportedly for allowing for good candidate decisions, the site is mostly used by kool-aid drinkers to  profess their company love while their disgruntled counterparts get the opportunity to vent.'
	},
	{
		companyId: 'amazon',
		name: 'Amazon',
		description:
			'One of the biggest employers in the world, Amazon has long since moved from being just the everything store to an everything company.'
	},
	{
		companyId: 'atlassian',
		name: 'Atlassian',
		description:
			'Atlassian is one of the leaders in software collaboration products and rode the Agile wave especially well with Jira and Confluence.'
	},
	{
		companyId: 'twitter',
		name: 'X (formerly Twitter)',
		description:
			'Once the social media darling of the journalist and political world, the takeover by a rich man-child turned it into the online equivalent of Fox News.'
	},
	{
		companyId: 'rapid7',
		name: 'Rapid7',
		description:
			'Rapid7 is a SecOPs provider that provides a cloud to on-prem cybersecurity platform'
	},
	{
		companyId: 'hackerone',
		name: 'Hackerone',
		description:
			'Hackerone provides hacking as a service to outmatch cybercriminals. Maybe I should not have included this one?'
	},
	{
		companyId: 'planet',
		name: 'Planet',
		description:
			"Planet has set out to image all of Earth's landmass every day allowing smaller organizations to benefit from frequent imaging."
	},
	{
		companyId: 'niantic',
		name: 'Niantic',
		description:
			'An augmented reality games platform, Niantic is going to change the world by allowing us to further immerse ourselves in our phones when outside.'
	},
	{
		companyId: 'shopify',
		name: 'Shopify',
		description:
			'A global e-commerce platform that allows smaller retailers to build an online presence without requiring internal software development help.'
	},
	{
		companyId: 'flexport',
		name: 'Flexport',
		description:
			'A logistical darling that heavily expanded during the pandemic to offer a digital-first freight forwarding experience.'
	}
];

export const LAYOFFS: Layoff[] = [
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
		description: 'The company got too heavy and slow',
		url: 'https://www.planet.com/pulse/a-note-from-our-ceo/'
	},
	{
		layoffId: 'niantic_06_23',
		companyId: 'niantic',
		description:
			'Another case of over expansion during the pandemic with the belief that customer behavior had changed for good instead of being a temporary blip.',
		url: 'https://nianticlabs.com/news/organizational-update'
	},
	{
		layoffId: 'shopify_05_23',
		companyId: 'shopify',
		description:
			'The CEO decided that too much of the company was working on side quests and removed the NPCs that were preventing focus on the main quests.',
		url: 'https://news.shopify.com/important-team-and-business-changes'
	},
	{
		layoffId: 'flexport_10_23',
		companyId: 'flexport',
		description:
			'The company, known for its frequent job postings on Hacker News, heavily expanded during the pandemic under the direction of Dave Clark. When shipping rates and volumes crashed, they found themselves in an unsustainable position.',
		url: 'https://news.shopify.com/important-team-and-business-changes'
	}
];

export const FREE_SPACE = Object.freeze({
	id: 'fr',
	quote: 'Free Time',
	quoteAttribution: 'You, Today',
	totalLayoffs: 0
});

export const CLICHES: Cliche[] = [
	{
		id: '00',
		text: 'boost operational efficiency',
		layoffIds: ['evernote_07_23', 'meta_04_23']
	},
	{
		id: '01',
		text: 'impacted individuals',
		layoffIds: ['evernote_07_23', 'indeed_03_23', 'glassdoor_03_23', 'amazon_03_23']
	},
	{
		id: '02',
		text: 'ambitious plans',
		layoffIds: ['evernote_07_23']
	},
	{
		id: '03',
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
		id: '05',
		text: 'optimism got the best of us',
		layoffIds: ['headspace_06_23']
	},
	{
		id: '06',
		text: 'hard calls',
		layoffIds: ['headspace_06_23']
	},
	{
		id: '07',
		text: 'difficult capital markets',
		layoffIds: ['headspace_06_23']
	},
	{
		id: '08',
		text: 'to be profitable',
		layoffIds: ['headspace_06_23', 'lyft_04_23', 'planet_08_23', 'flexport_10_23']
	},
	{
		id: '09',
		text: 'closer to our purpose',
		layoffIds: ['lyft_04_23']
	},
	{
		id: '10',
		text: 'difficult environment',
		layoffIds: ['meta_04_23']
	},
	{
		id: '11',
		text: 'period of uncertainty',
		layoffIds: ['meta_04_23', 'ea_03_23', 'amazon_03_23']
	},
	{
		id: '12',
		text: 'new economic reality',
		layoffIds: ['meta_04_23']
	},
	{
		id: '13',
		text: 'position of strength',
		layoffIds: ['ea_03_23']
	},
	{
		id: '14',
		text: 'lead this transformation',
		layoffIds: ['ea_03_23']
	},
	{
		id: '15',
		text: 'evolving business needs',
		layoffIds: ['lucid_03_23']
	},
	{
		id: '16',
		text: 'cost discipline',
		layoffIds: ['lucid_03_23']
	},
	{
		id: '17',
		text: 'heartbroken',
		layoffIds: ['indeed_03_23']
	},
	{
		id: '18',
		text: 'investing in our future',
		layoffIds: ['indeed_03_23']
	},
	{
		id: '19',
		text: 'affect those who are staying',
		layoffIds: ['indeed_03_23']
	},
	{
		id: '20',
		text: 'remain focused',
		layoffIds: ['glassdoor_03_23']
	},
	{
		id: '21',
		text: 'support each other',
		layoffIds: ['glassdoor_03_23']
	},
	{
		id: '22',
		text: 're-prioritization',
		layoffIds: ['amazon_03_23']
	},
	{
		id: '23',
		text: 'optimistic about the future',
		layoffIds: ['amazon_03_23']
	},
	{
		id: '24',
		text: 'rebalance',
		layoffIds: ['atlassian_03_23']
	},
	{
		id: '25',
		text: 'valuable contributions',
		layoffIds: ['twitter_11_22', 'planet_08_23']
	},
	{
		id: '26',
		text: 'healthy path',
		layoffIds: ['twitter_11_22']
	},
	{
		id: '27',
		text: 'place of strength',
		layoffIds: ['rapid7_08_23']
	},
	{
		id: '28',
		text: 'long term success',
		layoffIds: ['rapid7_08_23']
	},
	{
		id: '29',
		text: 'scale intentionally',
		layoffIds: ['rapid7_08_23']
	},
	{
		id: '30',
		text: 'painful and necessary',
		layoffIds: ['hackerone_08_23']
	},
	{
		id: '31',
		text: 'shifts in our market',
		layoffIds: ['hackerone_08_23']
	},
	{
		id: '32',
		text: 'one-time event',
		layoffIds: ['hackerone_08_23']
	},
	{
		id: '33',
		text: 'historically understaffed',
		layoffIds: ['planet_08_23']
	},
	{
		id: '34',
		text: 'narrow focus',
		layoffIds: ['niantic_06_23']
	},
	{
		id: '35',
		text: 'unique challenges',
		layoffIds: ['niantic_06_23']
	},
	{
		id: '36',
		text: 'streamline processes',
		layoffIds: ['niantic_06_23']
	},
	{
		id: '37',
		text: 'side quests (distractions)',
		layoffIds: ['shopify_05_23']
	},
	{
		id: '38',
		text: 'new paradigm',
		layoffIds: ['shopify_05_23']
	},
	{
		id: '39',
		text: 'AI',
		layoffIds: ['shopify_05_23']
	},
	{
		id: '39',
		text: 'unhealthy',
		layoffIds: ['shopify_05_23']
	},
	{
		id: '40',
		text: 'reliable partner',
		layoffIds: ['flexport_10_23']
	},
	{
		id: '41',
		text: 'we are the leader',
		layoffIds: ['flexport_10_23']
	}
];
