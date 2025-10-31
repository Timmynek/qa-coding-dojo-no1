import { secondLargest } from '../src/2_medium/task15_secondLargest';

describe('secondLargest', () => {
  test('[1,3,2] -> 2', () => expect(secondLargest([1,3,2])).toBe(2));
  test('[5] -> null', () => expect(secondLargest([5])).toBeNull());
  test('[7,7,5,5] -> 5', () => expect(secondLargest([7,7,5,5])).toBe(5));
});
