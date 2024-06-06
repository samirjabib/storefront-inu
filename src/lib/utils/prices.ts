import { noDivisionCurrencies } from '../contants';
import { RegionInfo } from '../types/global';
import { isEmpty } from './is-empty';

type FormatAmountParams = {
  amount: number;
  region: RegionInfo;
  includeTaxes?: boolean;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  locale?: string;
};

type ComputeAmountParams = {
  amount: number;
  region: RegionInfo;
  includeTaxes?: boolean;
};

type ConvertToLocaleParams = {
  amount: number;
  currency_code: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  locale?: string;
};

const getTaxRate = (region?: RegionInfo) => {
  return region && !isEmpty(region) ? region?.tax_rate / 100 : 0;
};

const convertToDecimal = (amount: number, region: RegionInfo) => {
  const divisor = noDivisionCurrencies.includes(
    region?.currency_code?.toLowerCase()
  )
    ? 1
    : 100;

  return Math.floor(amount) / divisor;
};

const convertToLocale = ({
  amount,
  currency_code,
  minimumFractionDigits,
  maximumFractionDigits,
  locale = 'en-US',
}: ConvertToLocaleParams) => {
  return currency_code && !isEmpty(currency_code)
    ? new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency_code,
        minimumFractionDigits,
        maximumFractionDigits,
      }).format(amount)
    : amount.toString();
};

/**
 * Takes an amount, a region, and returns the amount as a decimal including or excluding taxes
 */
export const computeAmount = ({
  amount,
  region,
  includeTaxes = true,
}: ComputeAmountParams) => {
  const toDecimal = convertToDecimal(amount, region);

  const taxRate = includeTaxes ? getTaxRate(region) : 0;

  const amountWithTaxes = toDecimal * (1 + taxRate);

  return amountWithTaxes;
};

export const formatAmount = ({
  amount,
  region,
  includeTaxes = true,
  ...rest
}: FormatAmountParams) => {
  const taxAwareAmount = computeAmount({
    amount,
    region,
    includeTaxes,
  });

  return convertToLocale({
    amount: taxAwareAmount,
    currency_code: region.currency_code,
    ...rest,
  });
};
