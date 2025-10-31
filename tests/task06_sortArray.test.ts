import { sortArray } from '../src/1_easy/task06_sortArray';

describe('sortArray', () => {
  test('[3,1,4,1,5,9] -> [1,1,3,4,5,9]', () => expect(sortArray([3,1,4,1,5,9])).toEqual([1,1,3,4,5,9]));
  test('[] -> []', () => expect(sortArray([])).toEqual([]));
  test('[2] -> [2]', () => expect(sortArray([2])).toEqual([2]));
});
