import { find_code } from '../src/01';

describe('test find code', () => {
    test('example one', () => {
        expect(find_code('1abc2')).toBe(12);
    });

    test('example two', () => {
        expect(find_code('pqr3stu8vwx')).toBe(38);
    });

    test('example three', () => {
        expect(find_code('a1b2c3d4e5f')).toBe(15);
    });
    
    test('example four', () => {
        expect(find_code('treb7uchet')).toBe(77);
    });

});