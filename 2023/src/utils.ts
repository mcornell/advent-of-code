import * as fs from 'fs';

export function read_file(pathToFile: string): string[] {
    let input = fs.readFileSync(pathToFile, 'utf-8');
    return input.split("\n");
}
