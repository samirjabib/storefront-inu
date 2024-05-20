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
	maxLength: number = 55
): string {
	if (typeof productName !== 'string') {
		throw new Error('Input must be a string');
	}

	if (productName.length > maxLength) {
		return productName.slice(0, maxLength) + '...';
	}

	return productName;
}
