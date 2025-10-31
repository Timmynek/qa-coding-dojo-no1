import { reverseArray } from '../src/2_medium/task17_reverseArray';

describe('reverseArray', () => {
  test('[1,2,3] -> [3,2,1]', () => expect(reverseArray([1,2,3])).toEqual([3,2,1]));
  test('[] -> []', () => expect(reverseArray([])).toEqual([]));
  test('[5] -> [5]', () => expect(reverseArray([5])).toEqual([5]));
});
