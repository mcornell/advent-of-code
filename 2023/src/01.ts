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


    console.log(calibration_line);
    const numbers_words: string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    let first_number = -1;
    let first_number_index = calibration_line.length;
    let first_number_string = "NaN";
    for (let num of numbers_words) {
        const index = calibration_line.indexOf(num);
        if (index > -1 && index < first_number_index) {
            first_number_index = index;
            first_number_string = num;
            console.log('found ' + num + " at " + index);
        }
    }
    for (let num of numbers) {
        const index = calibration_line.indexOf(num);
        if (index > -1 && index < first_number_index) {
            first_number_index = index;
            first_number_string = num;
            console.log('found ' + num + " at " + index);
        }
    }
    if (numbers_words.indexOf(first_number_string) > -1) {
        first_number = numbers_words.indexOf(first_number_string);
    } else {
        first_number = numbers.indexOf(first_number_string);
    }
    console.log("first is:" +first_number);

    // find back LastIndexOf
    let last_number = -1;
    let last_number_index = 0;
    let last_number_string = "NaN";
    for (let num of numbers_words) {
        const index = calibration_line.lastIndexOf(num);
        if (index > -1 && index > last_number_index) {
            last_number_index = index;
            last_number_string = num;
            console.log('found ' + num + " at " + index);
        }
    }
    for (let num of numbers) {
        const index = calibration_line.lastIndexOf(num);
        if (index > -1 && index > last_number_index) {
            last_number_index = index;
            last_number_string = num;
            console.log('found ' + num + " at " + index);
        }
    }
    if (numbers_words.indexOf(last_number_string) > -1) {
        last_number = numbers_words.indexOf(last_number_string);
    } else {
        last_number = numbers.indexOf(last_number_string);
    }
    console.log("last is:"+last_number);
    

    return first_number * 10 + last_number;
}

export function process_calibration(lines: string[]): number {
    let calibration = 0;
    for (let line of lines) {
        calibration += find_code(line);
    }
    return calibration;
}