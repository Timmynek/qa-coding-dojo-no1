import { isPalindrome } from '../src/2_medium/task11_palindrome';

describe('isPalindrome', () => {
  test('"radar" -> true', () => expect(isPalindrome('radar')).toBe(true));
  test('"hello" -> false', () => expect(isPalindrome('hello')).toBe(false));
  test('"" -> true', () => expect(isPalindrome('')).toBe(true));
  test('"a" -> true', () => expect(isPalindrome('a')).toBe(true));
});
