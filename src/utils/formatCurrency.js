import { REG_EXP } from '../constants/regexp';

const isNumber = (value) => typeof value === 'number' && Number.isFinite(value);

/**
 * @desc Format Currency Util Function
 *
 * @return { String }
 */

export const formatCurrency = (num = 0, decimals = 2, withSign = true) => {
  if (!isNumber(num)) return 0;
  const parseNumber = parseFloat(num);
  const numDecimals = Number.isInteger(parseNumber) ? 0 : decimals;
  const formatWithFixedPoint = parseNumber
    .toFixed(numDecimals)
    .replace('.', ',');
  let formatted = formatWithFixedPoint
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  if (withSign) formatted = '$' + formatted;
  return formatted;
};

export const formatCurrencyIntDecimals = (
  num = 0,
  decimals = 2,
  withSign = true,
  showZeros = true,
) => {
  if (!isNumber(num)) return 0;
  const parseNumber = parseFloat(num);
  const numDecimals = decimals;
  const formatWithFixedPoint = parseNumber
    .toFixed(num % 1 == 0 && !showZeros ? 0 : numDecimals)
    .replace('.', ',');
  let formatted = formatWithFixedPoint
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  if (withSign) formatted = '$' + formatted;
  return formatted;
};

export const splitAmountToInput = (value) => {
  let numbers = '0';
  let decimals = '00';
  if (value.length > 2) {
    decimals = value.substr(value.length - 2, 2);
    numbers = value.substr(0, value.length - 2);
  } else {
    decimals = value.length === 1 ? `0${value}` : value;
    numbers = '0';
  }

  return {
    numbers,
    decimals,
  };
};

export const formatAmount = (value) => {
  return value.toString().replace(/^0+/, '').replace('.', '');
};

export const dottedNumber = (value) => {
  return value.toString().replace(REG_EXP.dottedNumber, '$1.');
};

export const formatAmountInput = (value) => {
  const defaultNumber = '0';
  const defaultDecimals = '';
  if (value === undefined || value === null)
    return { defaultNumber, defaultDecimals };

  const number = value
    .replace('-', '')
    .replace(/^0+/, '')
    .replace(',', '')
    .replace('..', '')
    .split('.');

  const numbers =
    number[0].length > 0 ? dottedNumber(number[0]) : defaultNumber;
  const decimals =
    number[1]?.length > 0 ? number[1]?.substr(0, 2) : defaultDecimals;

  return { numbers, decimals };
};

/**
 * @desc Extract currencies from string
 *
 * @return { String[] | null }
 */
export const extractCurrencyOfString = (msg) => {
  const currencyRegExp = new RegExp(
    /\$\d+(\.\d{3})?(\.\d{3})?(\,\d{2})?/,
    'gi',
  );
  return msg.match(currencyRegExp);
};

export const formatAmountRow = (value) => {
  // Check if the number is positive, negative, or zero
  const sign = value >= 0 ? '+' : '-';

  // Get the integer and decimal parts of the number
  const [integerPart, decimalPart] = Math.abs(value).toFixed(2).split('.');

  // Format the integer part with thousands separators
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Build the final string with the desired format
  const formattedValue = `${sign} $${formattedInteger},${decimalPart}`;

  return formattedValue;
};

export const amountWithoutSign = (amount) =>
  String(amount).replace(/^(-|\+)/, '');
