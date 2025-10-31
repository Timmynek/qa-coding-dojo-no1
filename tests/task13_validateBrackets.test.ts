import { validateBrackets } from '../src/2_medium/task13_validateBrackets';

describe('validateBrackets', () => {
  test('(){}[] -> true', () => expect(validateBrackets('(){}[]')).toBe(true));
  test('([)] -> false', () => expect(validateBrackets('([)]')).toBe(false));
  test('(([])) -> true', () => expect(validateBrackets('(([]))')).toBe(true));
});
