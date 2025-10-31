import { fizzBuzz } from '../src/2_medium/task10_fizzBuzz';

describe('fizzBuzz', () => {
  test('15 -> [1,2,Fizz,4,Buzz,...,FizzBuzz]', () => expect(fizzBuzz(15)).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']));
  test('0 -> []', () => expect(fizzBuzz(0)).toEqual([]));
});
