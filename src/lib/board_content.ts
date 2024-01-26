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
	},
	{
		companyId: 'google',
		name: 'Google',
		description:
			'Originally a great search engine and famed for it\'s "Don\'t be evil" mantra Google has expanded into multiple high end technology areas.'
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
		url: 'https://www.flexport.com/blog/flexport-ceos-note-to-employees/'
	},
	{
		layoffId: 'google_01_24',
		companyId: 'google',
		description:
			'Sundar felt that Google was not prioritizing the big priorities and needed to futher reduce his staff to create capacity for investment.',
		url: 'https://www.theverge.com/2024/1/17/24042417/google-layoffs-2024-internal-employee-memo-sundar-pichai'
	}
];

export const FREE_SPACE = Object.freeze({
	id: 'fr',
	quote: 'Free Time',
	fullQuote: "I usually spend my free time worrying about when I'm going to work next.",
	quoteAttribution: 'Merrit Wever',
	totalLayoffs: 0
});

export const CLICHES: Cliche[] = [
	{
		id: '00',
		text: 'boost operational efficiency',
		layoffs: [
			{
				id: 'evernote_07_23',
				quote: `We're taking this step to <strong>boost operational efficiency</strong> and to make the most of the Bending Spoons employer brand, which is extremely strong in Europe.`
			},
			{
				id: 'meta_04_23',
				quote: `Our efficiency work has several parallel workstreams to improve <strong>organizational efficiency</strong>... I’ve said that part of our work will involve removing jobs...`
			}
		]
	},
	{
		id: '01',
		text: 'impacted individuals',
		layoffs: [
			{
				id: 'evernote_07_23',
				quote: `We’re also offering additional support to those in need, such as <strong>impacted individuals</strong> who are on a visa.`
			},
			{
				id: 'indeed_03_23',
				quote: `If your position has been eliminated, the subject will be “Your Position Has Been <strong>Impacted</strong>."`
			},
			{
				id: 'glassdoor_03_23',
				quote: `Those of <strong>you</strong> in the US whose roles are being <strong>impacted</strong> will receive a meeting invitation...`
			},
			{
				id: 'amazon_03_23',
				quote: `...we will communicate with the <strong>impacted employees</strong> (or where applicable in Europe, with employee representative bodies)...`
			}
		]
	},
	{
		id: '02',
		text: 'ambitious plans',
		layoffs: [
			{
				id: 'evernote_07_23',
				quote: `Our <strong>plans</strong> for Evernote are as <strong>ambitious</strong> as ever...`
			}
		]
	},
	{
		id: '03',
		text: 'I take full accountability',
		layoffs: [
			{
				id: 'headspace_06_23',
				quote: `<strong>I want to take full accountability for where we are</strong>...`
			},
			{
				id: 'indeed_03_23',
				quote: `<strong>I take sole accountability</strong> for where we are today. I am deeply and profoundly sorry.`
			},
			{
				id: 'hackerone_08_23',
				quote: `<strong>I take responsibility</strong> for the changes we are sharing today...`
			}
		]
	},
	{
		id: '04',
		text: 'current (macro) economic environment',
		layoffs: [
			{
				id: 'headspace_06_23',
				quote: `...we underestimated just how much the <stong>current economic environment</strong> would affect buying behaviors across...`
			},
			{
				id: 'glassdoor_03_23',
				quote: `...we’ve provided regular updates on the <strong>shifting macroeconomic environment</strong> and the decisions we’ve made to operate conservatively amidst the uncertainty.`
			},
			{
				id: 'atlassian_03_23',
				quote: `...better reflect operating in a changing and difficult <strong>macroeconomic environment</strong>...`
			},
			{
				id: 'hackerone_08_23',
				quote: `we did not anticipate the degree to which the <strong>overall economic situation</strong>`
			},
			{
				id: 'planet_08_23',
				quote: `Simultaneously, the <strong>macroeconomic environment</strong> has changed.`
			}
		]
	},
	{
		id: '05',
		text: 'optimism got the best of us',
		layoffs: [
			{ id: 'headspace_06_23', quote: `we let <strong>optimism get the best of us</strong>` }
		]
	},
	{
		id: '06',
		text: 'hard calls',
		layoffs: [
			{
				id: 'headspace_06_23',
				quote: `I didn't make all the <strong>hard calls</strong> last December that I needed to make`
			}
		]
	},
	{
		id: '07',
		text: 'difficult capital markets',
		layoffs: [
			{ id: 'headspace_06_23', quote: `In light of the <strong>difficult capital markets</strong>` }
		]
	},
	{
		id: '08',
		text: 'to be profitable',
		layoffs: [
			{
				id: 'headspace_06_23',
				quote: `we now need to make significant changes to ensure we still become <strong>profitable</strong>`
			},
			{
				id: 'lyft_04_23',
				quote: `With these changes, we have the opportunity to become the ... <strong>profitable business</strong> we should be.`
			},
			{ id: 'planet_08_23', quote: `while reinforcing <strong>our path to profitability</strong>` },
			{
				id: 'flexport_10_23',
				quote: `take advantage of the opportunities in front of us to <strong>return to profitability</strong> as soon as the end of next year`
			}
		]
	},
	{
		id: '09',
		text: 'companies have purpose',
		layoffs: [
			{
				id: 'lyft_04_23',
				quote: `As you’ve heard me say, great <strong>companies have purpose</strong>.`
			}
		]
	},
	{
		id: '10',
		text: 'difficult environment',
		layoffs: [
			{
				id: 'meta_04_23',
				quote: `Improving Business Performance in a <strong>Difficult Economic Environment</strong>`
			}
		]
	},
	{
		id: '11',
		text: 'period of uncertainty',
		layoffs: [
			{
				id: 'meta_04_23',
				quote: `My hope is to make these org changes as soon as possible in the year so we can get past this <strong>period</strong> of uncertainty and focus on the critical work ahead`
			},
			{
				id: 'ea_03_23',
				quote: `Even amidst <strong>macro uncertainty</strong>, EA is operating from a position of strength.`
			},
			{
				id: 'amazon_03_23',
				quote: `<strong>uncertainty</strong> that exists in the near future`
			}
		]
	},
	{
		id: '12',
		text: 'new economic reality',
		layoffs: [
			{
				id: 'meta_04_23',
				quote: `I think we should prepare ourselves for the possibility that this <strong>new economic reality</strong> will continue for many years...`
			}
		]
	},
	{
		id: '13',
		text: 'position of strength',
		layoffs: [
			{
				id: 'ea_03_23',
				quote: `Even amidst macro uncertainty, EA is operating from a <strong>position of strength</strong>.`
			}
		]
	},
	{
		id: '14',
		text: 'lead this transformation',
		layoffs: [
			{
				id: 'ea_03_23',
				quote: `...no team is better equipped to <strong>lead this transformation</strong> than us...`
			}
		]
	},
	{
		id: '15',
		text: 'evolving business needs',
		layoffs: [
			{
				id: 'lucid_03_23',
				quote: `"Given <strong>evolving business needs</strong> and productivity improvements, we are reducing the size of our organization...`
			}
		]
	},
	{
		id: '16',
		text: 'cost discipline',
		layoffs: [
			{
				id: 'lucid_03_23',
				quote: `This action is aligned with the <strong>cost discipline</strong> announcement...`
			}
		]
	},
	{
		id: '17',
		text: 'heartbroken',
		layoffs: [
			{
				id: 'indeed_03_23',
				quote: `I am <strong>heartbroken</strong> to share that I have made the difficult decision to reduce our headcount through layoffs.`
			}
		]
	},
	{
		id: '18',
		text: 'investing in our future',
		layoffs: [
			{
				id: 'indeed_03_23',
				quote: `...urgency to ensure that all of our energy is directed towards <strong>investing in our future</strong>.`
			}
		]
	},
	{
		id: '19',
		text: 'affect those who are staying',
		layoffs: [
			{
				id: 'indeed_03_23',
				quote: `For those <strong>who are staying</strong>, I know this will deeply <strong>affect</strong>all of you.`
			}
		]
	},
	{
		id: '20',
		text: 'remain focused',
		layoffs: [
			{
				id: 'glassdoor_03_23',
				quote: `...we will take time in the coming weeks to adapt our plans to ensure we can <strong>remain focused</strong> on delivering this vision...`
			}
		]
	},
	{
		id: '21',
		text: 'support each other',
		layoffs: [
			{
				id: 'glassdoor_03_23',
				quote: `I ask that we all do our best to <strong>support one another</strong> during this time...`
			}
		]
	},
	{
		id: '22',
		text: 're-prioritization',
		layoffs: [
			{
				id: 'amazon_03_23',
				quote: `...[our internal businesses] made <strong>re-prioritization</strong> decisions that sometimes led to role reductions...`
			}
		]
	},
	{
		id: '23',
		text: 'optimistic about the future',
		layoffs: [
			{
				id: 'amazon_03_23',
				quote: `I remain very <strong>optimistic about the future</strong> and the myriad of opportunities we have...`
			}
		]
	},
	{
		id: '24',
		text: 'rebalance',
		layoffs: [
			{
				id: 'atlassian_03_23',
				quote: `...[we] announced a <strong>rebalancing</strong> of resources resulting in the elimination of certain roles...`
			}
		]
	},
	{
		id: '25',
		text: 'valuable contributions',
		layoffs: [
			{
				id: 'twitter_11_22',
				quote: `...this will impact a number of individuals who have made <strong>valuable contributions</strong>...`
			},
			{
				id: 'planet_08_23',
				quote: `The <strong>contributions</strong> of the set of people whose roles are impacted today have been <strong>tremendous</strong>.`
			}
		]
	},
	{
		id: '26',
		text: 'healthy path',
		layoffs: [
			{
				id: 'twitter_11_22',
				quote: `In an effort to place [us] on a <strong>healthy path</strong>, we will go through the difficult process of reducing our global workforce...`
			}
		]
	},
	{
		id: '27',
		text: 'place of strength',
		layoffs: [
			{
				id: 'rapid7_08_23',
				quote: `...making decisions from a <strong>place of strength</strong> allows us the opportunity to restructure intentionally`
			}
		]
	},
	{
		id: '28',
		text: 'long term success',
		layoffs: [
			{
				id: 'rapid7_08_23',
				quote: `This restructuring ... will set up our teams and customers for <strong>long term success</strong>.`
			}
		]
	},
	{
		id: '29',
		text: 'scale intentionally',
		layoffs: [
			{
				id: 'rapid7_08_23',
				quote: `...and give us the flexibility to <strong>scale intentionally</strong>...`
			}
		]
	},
	{
		id: '30',
		text: 'painful and necessary',
		layoffs: [
			{
				id: 'hackerone_08_23',
				quote: `I have made the <strong>painful and necessary</strong> decision to undertake a restructuring`
			}
		]
	},
	{
		id: '31',
		text: 'shifts in our market',
		layoffs: [
			{
				id: 'hackerone_08_23',
				quote: `the global economic situation and the <strong>resulting shifts in our market</strong>.`
			}
		]
	},
	{
		id: '32',
		text: 'one-time event',
		layoffs: [
			{
				id: 'hackerone_08_23',
				quote: `We’ve designed this reduction in force as a <strong>one-time event</strong>.`
			}
		]
	},
	{
		id: '33',
		text: 'historically understaffed',
		layoffs: [
			{
				id: 'planet_08_23',
				quote: `building out teams that had been <strong>historically understaffed</strong>`
			}
		]
	},
	{
		id: '34',
		text: 'narrow focus',
		layoffs: [
			{
				id: 'niantic_06_23',
				quote: `I have made the decision to <strong>narrow our focus</strong> for mobile game investments.`
			}
		]
	},
	{
		id: '35',
		text: 'unique challenges',
		layoffs: [
			{
				id: 'niantic_06_23',
				quote: `We are operating in a tough market environment due to ... <strong>unique challenges</strong> in the mobile gaming and AR markets.`
			}
		]
	},
	{
		id: '36',
		text: 'streamline processes',
		layoffs: [
			{
				id: 'niantic_06_23',
				quote: `The leadership team and I are committed to <strong>cutting out unnecessary processes</strong>`
			}
		]
	},
	{
		id: '37',
		text: 'side quests (distractions)',
		layoffs: [
			{
				id: 'shopify_05_23',
				quote: `<strong>Side quests</strong> are always <strong>distracting</strong> because the company has to split focus`
			}
		]
	},
	{
		id: '38',
		text: 'new paradigm',
		layoffs: [
			{
				id: 'shopify_05_23',
				quote: `But once [large companies] need to adapt to some <strong>new paradigm</strong> they can’t.`
			}
		]
	},
	{
		id: '39',
		text: 'AI',
		layoffs: [
			{ id: 'shopify_05_23', quote: `But now we are at the dawn of the <strong>AI</strong> era...` }
		]
	},
	{
		id: '39',
		text: 'unhealthy',
		layoffs: [
			{
				id: 'shopify_05_23',
				quote: `Our numbers were <strong>unhealthy</strong>, just like it is in much of the tech industry.`
			}
		]
	},
	{
		id: '40',
		text: 'reliable partner',
		layoffs: [
			{
				id: 'flexport_10_23',
				quote: `Customers need to be able to count on [us] as a reliable partner`
			}
		]
	},
	{
		id: '41',
		text: 'we are the leader',
		layoffs: [
			{
				id: 'flexport_10_23',
				quote: `<strong>We are the</strong> technology <strong>leader</strong> in this space and will continue to accelerate. `
			}
		]
	},
	{
		id: '42',
		text: 'capacity for investment',
		layoffs: [
			{
				id: 'google_01_24',
				quote:
					'We have ambitious goals and will be investing in our big priorities this year. The reality is that to create the <strong>capacity for this investment</strong>, we have to make tough choices.'
			}
		]
	}
];
