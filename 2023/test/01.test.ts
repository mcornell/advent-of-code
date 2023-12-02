import { find_code, find_word_codes, process_calibration, process_calibration_words } from '../src/01';
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
        let test_lines = read_file('./test/test-1-1.txt');
        expect(process_calibration(test_lines)).toBe(142);
    });

    test('puzzle one', () => {
        let test_lines = read_file('./test/puzzle-1-1.txt');
        expect(process_calibration(test_lines)).toBe(55538);
    });
});

describe('test find word codes', ()  => {
    test('example one', () => {
        expect(find_word_codes('two1nine')).toBe(29);
    });
    test('example two', () => {
        expect(find_word_codes('eightwothree')).toBe(83);
    });
    test('example 3', () => {
        expect(find_word_codes('abcone2threexyz')).toBe(13);
    });
    test('example 4', () => {
        expect(find_word_codes('xtwone3four')).toBe(24);
    });
    test('example 5', () => {
        expect(find_word_codes('4nineeightseven2')).toBe(42);
    });
    test('example 6', () => {
        expect(find_word_codes('zoneight234')).toBe(14);
    });
    test('example 7', () => {
        expect(find_word_codes('7pqrstsixteen')).toBe(76);
    });
    test('weird thing', () => {
        expect(find_word_codes('1vqxhglhnhrpbnlvq')).toBe(11);
    })
});

describe('test process calibration words', () => {
    test('example one', () => {
        let test_lines = read_file('./test/test-1-2.txt');
        expect(process_calibration_words(test_lines)).toBe(281);
    });

    test('puzzle one', () => {
        let test_lines = read_file('./test/puzzle-1-1.txt');
        expect(process_calibration_words(test_lines)).toBe(54743);
    });
});





