import { find_code } from '../src/01';

describe('test find code', () => {
  test('example one', () => {
    expect(find_code('1abc2')).toBe(12);
  });
});