export function find_code(calibration_line: string): number {
    let numbers: string[] = [];
    for (let value of calibration_line) {
        if (!isNaN(Number(value))) {
            numbers.push(value);
        }
    }
    let code = numbers?.shift() ?? "0";
    let code_end = numbers?.pop() ?? code;

    return Number(code + code_end);
}

export function find_word_codes(calibration_line: string): number {

    const numbers: string[] = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    console.log(numbers);
    let first_number_index = calibration_line.length;
    let first_number_string = "NaN";
    for (let num of numbers) {
        console.log("looking for " +num);
        const index = calibration_line.indexOf(num);
        if (index > -1 && index < first_number_index) {
            first_number_index = index;
            first_number_string = num;
            console.log('found ' + num + " at " + index);
        }
    }
    const first_number = numbers.indexOf(first_number_string);
    console.log(first_number);

    // find back LastIndexOf
    let last_number_index = 0;
    let last_number_string = "NaN";
    for (let num of numbers) {
        const index = calibration_line.lastIndexOf(num);
        if (index > -1 && index > last_number_index) {
            last_number_index = index;
            last_number_string = num;
            console.log('found ' + num + " at " + index);
        }
    }
    const last_number = numbers.indexOf(last_number_string);

    return first_number * 10 + last_number;
}

export function process_calibration(lines: string[]): number {
    let calibration = 0;
    for (let line of lines) {
        calibration += find_code(line);
    }
    return calibration;
}