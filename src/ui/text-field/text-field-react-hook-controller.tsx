/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';

import { Controller } from 'react-hook-form';

import { TextField } from './text-field';
import { ControlledTextFieldProps } from './types';

export const TextFieldReactHookController: FC<ControlledTextFieldProps> = (
  props,
) => {
  const { control, name, rules, valueDefault, elementProps } = props;

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextField
          {...elementProps}
          value={valueDefault || value}
          onBlur={onBlur}
          onChangeText={onChange}
        />
      )}
    />
  );
};
