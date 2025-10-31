import { validateAPISchema } from '../src/3_hard/task20_apiSchemaValidation';

describe('validateAPISchema', () => {
  const schema = { id: 'number', name: 'string' };
  test('{ id:1, name:"John" } -> true', () => expect(validateAPISchema({id:1,name:'John'}, schema)).toBe(true));
  test('{ id:"1", name:"John" } -> false', () => expect(validateAPISchema({id:'1',name:'John'}, schema)).toBe(false));
  test('{} -> false', () => expect(validateAPISchema({}, schema)).toBe(false));
});
