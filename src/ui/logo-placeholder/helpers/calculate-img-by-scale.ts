import { NumericScaleSizes, scaleSizes } from '@theme/foundations/sizes';
import { objectKeys } from '@theme/utils';

type CalculateImgScaledSizeFn = (
  size: NumericScaleSizes,
  scaleSpacesBetween?: number,
) => NumericScaleSizes;

const imgScaleSizes = objectKeys(scaleSizes).sort(
  (a, b) => Number(a) - Number(b),
);

/**
 * Calculates the scaled size of an image based on its original size and a number of spaces between scales.
 * @param size - The original size of the image.
 * @param scaleSpacesBetween - The number of spaces between scales. Default is 3.
 * @returns The scaled size of the image.
 */
export const calculateImgScaledSize: CalculateImgScaledSizeFn = (
  size,
  scaleSpacesBetween = 3,
) => {
  const imageSize = Number(size);

  const imgIndex =
    imgScaleSizes.findIndex((s) => imageSize === Number(s)) -
    scaleSpacesBetween;

  const maxIndex = imgScaleSizes.length - 1;
  const index = Math.max(0, Math.min(imgIndex, maxIndex));

  return imgScaleSizes[index];
};
