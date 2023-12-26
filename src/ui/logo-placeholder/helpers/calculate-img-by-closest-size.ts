import { NumericScaleSizes, scaleSizes } from '@theme/foundations/sizes';
import { objectKeys } from '@theme/utils';

const REF_BASE_IMG_SIZE = 6;
const REF_BASE_BOX_SIZE = 10;

const imageSizes = objectKeys(scaleSizes).sort((a, b) => Number(a) - Number(b));

/**
 * Calculates the closest image size from a list of predefined sizes based on a given aspect ratio.
 * @param size - The size of the box containing the image.
 * @returns The closest size from the list of predefined sizes.
 */
export const calculateImgSizeByClosestSize = (
  size: NumericScaleSizes,
): NumericScaleSizes => {
  const result = Math.round(
    (Number(size) * REF_BASE_IMG_SIZE) / REF_BASE_BOX_SIZE,
  );

  // get the closest size from the size list
  const closestSize = imageSizes.reduce((acc, curr) => {
    return Math.abs(Number(curr) - result) < Math.abs(Number(acc) - result)
      ? curr
      : acc;
  });

  return closestSize;
};
