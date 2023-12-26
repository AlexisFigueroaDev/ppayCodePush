import { parsePhoneNumberFromString } from 'libphonenumber-js';

import type { CountryCode } from '../../../../node_modules/libphonenumber-js/types';

interface SplitAmountReturn {
  numbers: string;
  decimals: string;
}

export const splitAmountToInput = (value: number): SplitAmountReturn => {
  let numbers = '0';
  let decimals = '00';
  const tempNumber = value ? value.toFixed(2) : (+value).toFixed(2);
  const formatedNumber = tempNumber
    .toString()
    .replace(/^0+/, '')
    .replace('.', '');
  if (formatedNumber.length > 2) {
    decimals = formatedNumber.substr(formatedNumber.length - 2, 2);
    numbers = formatedNumber.substr(0, formatedNumber.length - 2);
  } else {
    decimals =
      formatedNumber.length === 1 ? `0${formatedNumber}` : formatedNumber;
    numbers = '0';
  }

  return {
    numbers,
    decimals,
  };
};

export const formatNumbers = (numbers: string): string => {
  return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const amountToCurrency = (value: number): string => {
  const { numbers, decimals } = splitAmountToInput(value);

  const formattedNumbers = formatNumbers(numbers);

  return `$${formattedNumbers},${decimals}`;
};

export const amountToCurrencyWithoutDecimals = (value: number): string => {
  const { numbers, decimals } = splitAmountToInput(value);
  if (Number.isInteger(value)) {
    return `$${numbers}`;
  }
  return `$${numbers},${decimals}`;
};

export const amountFixed = (value: string): string => {
  const formattedValue = value.replace(/[^\d.]/g, '');
  const parts = formattedValue.split('.');
  if (parts[1] && parts[1].length > 2) {
    parts[1] = parts[1].slice(0, 2);
  }
  const formattedNumber =
    parts.length === 2 ? `${parts[0]}.${parts[1]}` : parts[0];
  return formattedNumber;
};

export const phoneMask = (
  phoneNumber: string,
  country: CountryCode,
): string => {
  const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, country);

  if (!parsedPhoneNumber) {
    return phoneNumber;
  }

  const formattedNumber = parsedPhoneNumber.format('NATIONAL');
  const finalFormattedNumber = formattedNumber.replace(/[() ]/g, '-');

  return finalFormattedNumber;
};
