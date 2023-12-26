import React, { FC } from 'react';

import { Badge } from 'native-base';

import { TagProps, colorBy } from './types';
import { Icon } from '../icon';
import { Text } from '../text';

export const BadgeTag: FC<TagProps> = ({
  /** text of the tag */
  children,
  /** set of variants avaibles for the tag */
  variant = 'info',
  /** set of icons availabes */
  icon = 'ArrowUp',
}) => (
  <Badge
    leftIcon={
      icon ? <Icon size="12" name={icon} color={colorBy(variant)} /> : undefined
    }
    variant={`${variant}-tag`}
  >
    <Text
      maxFontMultiplier={1.2}
      variant="bodyBold-xs"
      color={colorBy(variant)}
    >
      {children}
    </Text>
  </Badge>
);
