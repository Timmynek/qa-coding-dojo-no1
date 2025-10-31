import { fibonacci } from '../src/2_medium/task07_fibonacci';

describe('fibonacci', () => {
  test('5 -> [0,1,1,2,3]', () => expect(fibonacci(5)).toEqual([0,1,1,2,3]));
  test('0 -> []', () => expect(fibonacci(0)).toEqual([]));
  test('1 -> [0]', () => expect(fibonacci(1)).toEqual([0]));
});
