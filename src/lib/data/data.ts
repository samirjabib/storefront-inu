import { cache } from 'react';
import { medusaClient } from '../config';

export const listRegions = cache(async function () {
	return medusaClient.regions
		.list()
		.then(({ regions }) => regions)
		.catch(err => {
			console.log(err);
			return null;
		});
});
