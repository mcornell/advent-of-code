import { find_code, process_calibration } from '../src/01';
import { read_file } from '../src/utils';

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

describe('test process calibration', () => {
    test('example one', () => {
        let test_lines = read_file('./test/test-text-1.txt');
        expect(process_calibration(test_lines)).toBe(142);
    });

    test('puzzle one', () => {
        let test_lines = read_file('./test/puzzle-1-1.txt');
        expect(process_calibration(test_lines)).toBe(55538);
    });
});