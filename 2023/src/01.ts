export function find_code(calibration_line: string): number {
    let numbers: string[] = [];
    for (let value of calibration_line) {
        if (!isNaN(Number(value))) {
            numbers.push(value);
        }
    }
    let code = numbers?.shift() ?? "0";
    let code_end =  numbers?.pop() ?? code;

    return Number(code + code_end);
}