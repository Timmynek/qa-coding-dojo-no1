import { mergeArrays } from '../src/2_medium/task14_mergeArrays';

describe('mergeArrays', () => {
  test('[1,2], [2,3] -> [1,2,3]', () => expect(mergeArrays([1,2],[2,3])).toEqual([1,2,3]));
  test('[], [] -> []', () => expect(mergeArrays([],[])).toEqual([]));
});
