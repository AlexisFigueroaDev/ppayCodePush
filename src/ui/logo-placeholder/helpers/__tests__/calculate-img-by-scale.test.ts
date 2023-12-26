import { calculateImgScaledSize } from '../calculate-img-by-scale';

describe('calculateImgScaledSize', () => {
  // The scale is defined in src/theme/foundations/sizes.ts
  // Example outputs: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96']

  test('should return the correct size based on order scaled sizes', () => {
    const size = calculateImgScaledSize('16');
    expect(size).toBe('9');
  });

  test('should return the correct size if the choice its the first of the scale', () => {
    const size = calculateImgScaledSize('1');
    expect(size).toBe('1');
  });

  test('should return the correct size if the choice its the last of the scale', () => {
    const size = calculateImgScaledSize('96');
    expect(size).toBe('64');
  });

  test('should return the correct size if pass a other scale to scaleSpacesBetween param', () => {
    const size = calculateImgScaledSize('16', 2);
    expect(size).toBe('10');
  });
});
