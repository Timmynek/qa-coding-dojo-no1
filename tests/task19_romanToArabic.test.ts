import { romanToArabic } from '../src/3_hard/task19_romanToArabic';

describe('romanToArabic', () => {
  test('IX -> 9', () => expect(romanToArabic('IX')).toBe(9));
  test('XIV -> 14', () => expect(romanToArabic('XIV')).toBe(14));
  test('MCMXCIV -> 1994', () => expect(romanToArabic('MCMXCIV')).toBe(1994));
  test('I -> 1', () => expect(romanToArabic('I')).toBe(1));
});
