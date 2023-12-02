import { read_file } from '../src/utils';
import { is_game_possible, process_games } from '../src/02';

describe('test find code', () => {
    test('example one', () => {
        expect(is_game_possible('3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')).toBe(true);
    });
    test('example two', () => {
        expect(is_game_possible('1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toBe(true);
    });
    test('example 3', () => {
        expect(is_game_possible('8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red')).toBe(false);
    });
    test('example 4', () => {
        expect(is_game_possible('1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red')).toBe(false);
    });
    test('example 5', () => {
        expect(is_game_possible('6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green')).toBe(true);
    });
});

describe('test process games', () =>{
    test('example 1', () => {
        let test_lines = read_file('./test/test-2-1.txt');
        expect(process_games(test_lines)).toBe(8);
    });
    test('puzzle 1', () => {
        let test_lines = read_file('./test/puzzle-2-1.txt');
        expect(process_games(test_lines)).toBe(3099);
    });
});