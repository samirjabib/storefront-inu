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

export function isMobileViewport(): boolean {
  // Si estamos en un entorno de servidor, asumimos un ancho predeterminado para el móvil
  if (typeof window === 'undefined') {
    return true; // Cambiar a false si se desea que sea false por defecto
  }

  // Verificar el ancho de la ventana para determinar si es móvil
  return window.innerWidth < 768; // Aquí establecemos 768 como el punto de corte para móvil
}
