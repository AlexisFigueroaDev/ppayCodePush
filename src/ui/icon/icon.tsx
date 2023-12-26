import React, { FC, ReactElement } from 'react';

import { Icon as NBIcon } from 'native-base';

import { IconPaths, IconColors, IconProps, Sizes } from './types';

export const Icon: FC<IconProps> = ({ name, color = 'text', size = '24' }) => {
  const IconComponent = IconPaths[name];

  if (!IconComponent) {
    throw new Error(`Invalid icon name: ${name}`);
  }

  const renderedIcon: ReactElement = (
    <IconComponent
      color={IconColors[color]}
      width={Sizes[size]}
      height={Sizes[size]}
    />
  );

  return <NBIcon as={renderedIcon} color={IconColors[color]} />;
};
