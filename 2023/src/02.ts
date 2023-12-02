import { freemem } from "os";

export function is_game_possible(game_string: string, bag_contents: Map<string, number> = new Map<string, number>([["red", 12], ["green", 13], ["blue", 14]])): boolean {

    const rounds = game_string.split(';');
    for (const round of rounds) {
        const cubes = round.trim().split(',');
        for (const cube of cubes) {
            const info = cube.trim().split(' ');
            const count: number = +info[0];
            const bag_count: number = bag_contents.get(info[1]) ?? 0;
            if (count > bag_count) {
                return false;
            }
        }
    }

    return true;
}

export function process_games(game_lines: string[], bag_contents: Map<string, number> = new Map<string, number>([["red", 12], ["green", 13], ["blue", 14]])): number {
    let total = 0;
    for (const line of game_lines) {
        const game_info: string[]= line.split(":");
        const game_number = game_info[0].trim().split(" ")[1];
        if (is_game_possible(game_info[1].trim(), bag_contents)) {
            total += +game_number;
        }
    }
    return total;
}

export function find_fewest_set(game_string: string): Map<string,number> {
    let fewest: Map<string,number> = new Map<string,number>([["red", 0], ["green", 0], ["blue", 0]]);
    const rounds = game_string.split(';');
    for (const round of rounds) {
        const cubes = round.trim().split(',');
        for (const cube of cubes) {
            const info = cube.trim().split(' ');
            const count: number = +info[0];
            const fewest_color = fewest.get(info[1]) ?? 0;
            if (count > fewest_color) {
                fewest.set(info[1], count);
            }
        }
    }
    return fewest;
}

export function process_power_games(game_lines: string[]): number {
    let total = 0;
    for (const line of game_lines) {
        const game_info: string[]= line.split(":");
        const fewest = find_fewest_set(game_info[1].trim());
        const game_product = [...fewest.values()].reduce((product, count) => product * count);
        total += game_product;
    }
    return total;
}