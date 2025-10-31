import { reverseString } from '../src/1_easy/task03_reverseString';

describe('reverseString', () => {
  test('hello -> olleh', () => expect(reverseString('hello')).toBe('olleh'));
  test('"" -> ""', () => expect(reverseString('')).toBe(''));
  test('a -> a', () => expect(reverseString('a')).toBe('a'));
});
