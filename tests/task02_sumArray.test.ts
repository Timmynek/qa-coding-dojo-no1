import { sumArray } from '../src/1_easy/task02_sumArray';

describe('sumArray', () => {
  test('[1,2,3,4,5] -> 15', () => expect(sumArray([1,2,3,4,5])).toBe(15));
  test('[] -> 0', () => expect(sumArray([])).toBe(0));
  test('[-1,1,-2,2] -> 0', () => expect(sumArray([-1,1,-2,2])).toBe(0));
});
