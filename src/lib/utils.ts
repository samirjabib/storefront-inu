import { Region } from '@medusajs/medusa';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Shortens the product name if it exceeds the maximum allowed length.
 *
 * @param productName - The name of the product to shorten.
 * @param maxLength - The maximum length of the product name before shortening.
 * @returns The shortened product name with "..." appended if it exceeds maxLength.
 */
export function shortenProductName(
	productName: string,
	maxLength: number = 50
): string {
	if (typeof productName !== 'string') {
		throw new Error('Input must be a string');
	}

	if (productName.length > maxLength) {
		return productName.slice(0, maxLength) + '...';
	}

	return productName;
}

/* 

---
*/

const transformProductPreview = (
	product: PricedProduct,
	region: Region
): ProductPreviewType => {
	const variants = product.variants as unknown as CalculatedVariant[];

	let cheapestVariant = undefined;

	if (variants?.length > 0) {
		cheapestVariant = variants.reduce((acc, curr) => {
			if (acc.calculated_price > curr.calculated_price) {
				return curr;
			}
			return acc;
		}, variants[0]);
	}

	return {
		id: product.id!,
		title: product.title!,
		handle: product.handle!,
		thumbnail: product.thumbnail!,
		created_at: product.created_at,
		price: cheapestVariant
			? {
					calculated_price: formatAmount({
						amount: cheapestVariant.calculated_price,
						region: region,
						includeTaxes: false,
					}),
					original_price: formatAmount({
						amount: cheapestVariant.original_price,
						region: region,
						includeTaxes: false,
					}),
					difference: getPercentageDiff(
						cheapestVariant.original_price,
						cheapestVariant.calculated_price
					),
					price_type: cheapestVariant.calculated_price_type,
			  }
			: undefined,
	};
};
