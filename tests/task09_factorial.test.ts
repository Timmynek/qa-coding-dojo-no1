import { factorial } from '../src/2_medium/task09_factorial';

describe('factorial', () => {
  test('5 -> 120', () => expect(factorial(5)).toBe(120));
  test('0 -> 1', () => expect(factorial(0)).toBe(1));
  test('1 -> 1', () => expect(factorial(1)).toBe(1));
});
