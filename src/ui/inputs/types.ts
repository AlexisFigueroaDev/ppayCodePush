import React from 'react';

import type { CountryCode } from '../../../node_modules/libphonenumber-js/types';

type InputPhoneNumber = {
  rawNumber: string;
  maskedNumber: string;
};

export interface InputScreenPhoneProps {
  country?: CountryCode;
  phoneNumber: InputPhoneNumber;
  setPhoneNumber: (params: InputPhoneNumber) => void;
  onSubmitKeyPress?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
  title?: string;
  subtitle?: string;
  legend?: string;
  hasError?: boolean;
}

export interface InputScreenNumbersProps {
  title: string;
  description: string;
  value: string;
  setValue: (value: string) => void;
  digits?: 4 | 6;
  errorText?: string;
}

export interface InputScreenPasswordProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  digits?: 4 | 6;
  errorText?: string;
}

export interface InputScreenAmountProps {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  onSubmitKeyPress: () => void;
  autoFocus?: boolean;
  currency?: string;
  title?: string;
  subtitle?: string;
  legend?: string;
  error?: string;
  maxLength?: number;
}
