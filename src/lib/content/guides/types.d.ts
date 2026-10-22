export interface GuideSection {
	id: string;
	title: string;
	paragraphs?: string[];
	list?: string[];
	listOrdered?: string[];
	note?: string;
}

export interface RelatedGuide {
	path: string;
	title: string;
}

export interface GuidePage {
	path: string;
	title: string;
	shortTitle?: string;
	description: string;
	isPillar?: boolean;
	pillarLink?: boolean;
	heroImage?: { image: string; alt: string; caption?: string };
	related?: RelatedGuide[];
	sections: GuideSection[];
}
