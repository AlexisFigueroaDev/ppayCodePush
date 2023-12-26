import { IImageProps } from 'native-base';

import { NumericScaleSizes } from '@theme/foundations/sizes';

export type LogoPlaceHolderSizes = NumericScaleSizes;

export interface LogoPlaceholderProps extends Pick<IImageProps, 'alt'> {
  uri: IImageProps['src'];
  size?: NumericScaleSizes;
}
