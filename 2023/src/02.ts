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