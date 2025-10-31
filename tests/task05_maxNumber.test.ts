import { maxNumber } from '../src/1_easy/task05_maxNumber';

describe('maxNumber', () => {
  test('[3,7,2,9,5] -> 9', () => expect(maxNumber([3,7,2,9,5])).toBe(9));
  test('[-5,-1,-10] -> -1', () => expect(maxNumber([-5,-1,-10])).toBe(-1));
  test('[42] -> 42', () => expect(maxNumber([42])).toBe(42));
});
