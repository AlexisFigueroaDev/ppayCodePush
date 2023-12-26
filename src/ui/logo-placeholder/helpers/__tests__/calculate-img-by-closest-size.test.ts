import { calculateImgSizeByClosestSize } from '../calculate-img-by-closest-size';

describe('calculateImgSizeByClosestSize', () => {
  // The scale is defined in src/theme/foundations/sizes.ts
  // Scale Size eg: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96']

  test('should return the correct closest and exits size in the scale', () => {
    const size = calculateImgSizeByClosestSize('16');
    expect(size).toBe('10');
  });

  test('should return the correct closest and exit size when the minimum size is selected in the scale.', () => {
    const size = calculateImgSizeByClosestSize('1');
    expect(size).toBe('1');
  });

  test('should returns the correct closest and exit size when the max size is selected in the scale', () => {
    const size = calculateImgSizeByClosestSize('96');
    expect(size).toBe('56');
  });
});
