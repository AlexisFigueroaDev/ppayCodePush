import { IFabProps } from 'native-base';

import { IconProps, KeySizes } from '@ui/icon/types';

import { FabSizes } from './constants';

export interface FabProps extends Pick<IFabProps, 'placement' | 'label' | 'onPress'> {
  size?: FabSizes;
  icon: IconProps['name'];
  onPress: () => void;
  testID: string;
}

export type IconByFabSize = Record<FabSizes, KeySizes>;