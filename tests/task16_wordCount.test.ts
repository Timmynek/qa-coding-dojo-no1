import { wordCount } from '../src/2_medium/task16_wordCount';

describe('wordCount', () => {
  test('"Hello world" -> 2', () => expect(wordCount('Hello world')).toBe(2));
  test('"" -> 0', () => expect(wordCount('')).toBe(0));
  test('"One two  three" -> 3', () => expect(wordCount('One two  three')).toBe(3));
});
