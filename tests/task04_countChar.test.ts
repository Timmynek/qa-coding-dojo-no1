import { countChar } from '../src/1_easy/task04_countChar';

describe('countChar', () => {
  test('hello, l -> 2', () => expect(countChar('hello','l')).toBe(2));
  test('"" , a -> 0', () => expect(countChar('', 'a')).toBe(0));
  test('aaaa, a -> 4', () => expect(countChar('aaaa','a')).toBe(4));
});
