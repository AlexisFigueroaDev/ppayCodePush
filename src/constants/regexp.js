export const REG_EXP = {
  dottedNumber: /(\d)(?=(\d{3})+(?!\d))/g,
  validPhoneNumber: /^(?!(0800|0810))/g,
  validEmail: /^[a-zA-Z0-9_\-\.]{5,200}@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  validARNumber:
    /^(?:(?:00|[+])?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
  ARPhoneBeginning: /^(?:(?:00|[+])?549?)?0?/,
  regExpOnlyNum: /^[0-9\b]+$/,
  validPinCodeValidator: /\d+/g,
  regExpBirthDate: /^[0-9\b]+$/,
  regExpOnlyString: /^[a-zA-Z]*$/,
  regExpNumAndDot: /^(\d[1-2-3].|\d[2-3]*)/,
}
