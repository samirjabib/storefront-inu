import { cache } from 'react';
import { medusaClient } from '../config';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { cookies } from 'next/headers';
import { Region } from '@medusajs/medusa';

/**
 * Function for getting custom headers for Medusa API requests, including the JWT token and cache revalidation tags.
 *
 * @param tags
 * @returns custom headers for Medusa API requests
 */
const getMedusaHeaders = (tags: string[] = []) => {
	const headers = {
		next: {
			tags,
		},
	} as Record<string, any>;

	const token = cookies().get('_medusa_jwt')?.value;

	if (token) {
		headers.authorization = `Bearer ${token}`;
	} else {
		headers.authorization = '';
	}

	return headers;
};

export const listRegions = cache(async function () {
	return medusaClient.regions
		.list()
		.then(({ regions }) => regions)
		.catch(err => {
			console.log(err);
			return null;
		});
});
