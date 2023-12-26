import React, { FC } from 'react';

import { Control, Controller, ControllerProps } from 'react-hook-form';

import { CheckboxRows } from '../checkbox-rows';
import { CheckboxRowsProps } from '../type';

// TODO: MOVE TO COMMON FILE. Maybe  react hook form type file
export interface RHControllerProps<T extends Record<string, unknown>>
  extends Omit<ControllerProps, 'render' | 'control'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, unknown>;
  elementProps: T;
}

type ControlledCheckboxRowsProps = RHControllerProps<
  Omit<CheckboxRowsProps, 'onChange'>
>;

// TODO: Component not working. Must have a look at react hook form functionality with array of checkboxs
export const ControlledCheckboxRows: FC<ControlledCheckboxRowsProps> = ({
  elementProps,
  ...controllerProps
}) => {
  const { control, name, rules } = controllerProps;

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange } }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <CheckboxRows {...elementProps} />
      )}
    />
  );
};
