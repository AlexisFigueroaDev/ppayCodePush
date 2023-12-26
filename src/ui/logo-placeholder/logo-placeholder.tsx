import React, { FC } from 'react'

import { Image, Box } from 'native-base'

import { calculateImgSizeByClosestSize } from './helpers/calculate-img-by-closest-size';
import { LogoPlaceholderProps } from './types';

export const LogoPlaceholder: FC<LogoPlaceholderProps> = ({
  /** Internal src image uri */
  uri,
  /** string to define the image alt value */
  alt = 'logo-placeholder',
  /** size number for width and height of container component and image size */
  size = '10',
}) => {
  const closestSize = calculateImgSizeByClosestSize(size);

  return (
    <Box
      bg="primaryDark.0"
      borderWidth="1"
      borderColor="primaryDark.20"
      rounded="full"
      justifyContent="center"
      size={size}
    >
      <Image
        resizeMode="contain"
        alignSelf="center"
        fallbackElement={<Box />}
        size={closestSize}
        src={uri}
        alt={alt}
      />
    </Box>
  );
};
