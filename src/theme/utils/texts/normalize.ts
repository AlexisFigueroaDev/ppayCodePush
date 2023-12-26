import { Dimensions, PixelRatio } from 'react-native'


import { Variants } from '@ui/text/types';

import { objectKeys } from '../objects';

const { height: DEVICE_WINDOW_HEIGHT } = Dimensions.get('window');

export const STANDARD_BASE_VIEWPORT_HEIGHT = 760;

type FontVariantBaseStyle = {
  fontSize: number;
  lineHeight: number;
};

type TextVariantsMap = Record<Variants, FontVariantBaseStyle>;

export const normalizeFont = (
  dp: number,
  baseHeight: number = STANDARD_BASE_VIEWPORT_HEIGHT,
): number => {
  if (DEVICE_WINDOW_HEIGHT >= baseHeight) {
    const ratio = DEVICE_WINDOW_HEIGHT / baseHeight;
    const fontSize = dp * ratio;

    return PixelRatio.roundToNearestPixel(fontSize);
  }

  return dp;
};

export const normalizeFontVariants = <TVariants extends TextVariantsMap>(
  textVariants: TVariants,
): TVariants => {
  const normalizeFonts = objectKeys<TextVariantsMap>(textVariants).reduce(
    (acc, variant) => {
      const normalizedFontStyle = {
        ...textVariants[variant],
        fontSize: normalizeFont(textVariants[variant].fontSize),
        lineHeight: normalizeFont(textVariants[variant].lineHeight),
      };

      return {
        ...acc,
        [variant]: normalizedFontStyle,
      };
    },
    {} as TVariants,
  );

  return normalizeFonts;
};
