import { isPrime } from '../src/2_medium/task08_isPrime';

describe('isPrime', () => {
  test('7 -> true', () => expect(isPrime(7)).toBe(true));
  test('10 -> false', () => expect(isPrime(10)).toBe(false));
  test('1 -> false', () => expect(isPrime(1)).toBe(false));
});
