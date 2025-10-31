import { removeDuplicates } from '../src/2_medium/task12_removeDuplicates';

describe('removeDuplicates', () => {
  test('[1,2,2,3] -> [1,2,3]', () => expect(removeDuplicates([1,2,2,3])).toEqual([1,2,3]));
  test('[] -> []', () => expect(removeDuplicates([])).toEqual([]));
  test('[5,5,5] -> [5]', () => expect(removeDuplicates([5,5,5])).toEqual([5]));
});
