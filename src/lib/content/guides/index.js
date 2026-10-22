import {
	coldPlungePrepGuide,
	etiquetteGuide,
	bestSeasonGuide,
	natureReserveGuide,
	beginnersGuide
} from './clusters.js';

/** @type {{ path: string; title: string; description: string }[]} */
export const clusterGuides = [
	{
		path: coldPlungePrepGuide.path,
		title: coldPlungePrepGuide.title,
		description: coldPlungePrepGuide.description
	},
	{
		path: etiquetteGuide.path,
		title: etiquetteGuide.title,
		description: etiquetteGuide.description
	},
	{
		path: bestSeasonGuide.path,
		title: bestSeasonGuide.title,
		description: bestSeasonGuide.description
	},
	{
		path: natureReserveGuide.path,
		title: natureReserveGuide.title,
		description: natureReserveGuide.description
	},
	{
		path: beginnersGuide.path,
		title: beginnersGuide.title,
		description: beginnersGuide.description
	}
];

export {
	coldPlungePrepGuide,
	etiquetteGuide,
	bestSeasonGuide,
	natureReserveGuide,
	beginnersGuide
};
