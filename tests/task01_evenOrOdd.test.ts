import { evenOrOdd } from '../src/1_easy/task01_evenOrOdd';

describe('evenOrOdd', () => {
  test('4 -> even', () => expect(evenOrOdd(4)).toBe('even'));
  test('7 -> odd', () => expect(evenOrOdd(7)).toBe('odd'));
  test('0 -> even', () => expect(evenOrOdd(0)).toBe('even'));
  test('-3 -> odd', () => expect(evenOrOdd(-3)).toBe('odd'));
});
