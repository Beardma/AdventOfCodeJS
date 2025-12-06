import { send } from "process";

export const Day3A = (arr: string[]): void => {
    let total: number = 0;
    for (let i = 0; i < arr.length; i++) {
        const row = arr[i]!;
        const start = returnLargestNo(row, true);
        const end = returnLargestNo(row.slice(start.pos + 1), false)
        total += Number(String(start.num) + String(end.num));
    }

    // Answer: 357
    console.log(`Day3A: The total joltage is: ${total}`)
};

export const Day3B = (arr: string[]): void => {
    let total: number = 0
    for (let i = 0; i < arr.length; i++) {
        const row = arr[i]!;
        let sectionStart = 0;
        let sectionEnd = row.length - 11;

        let currentValue = "";

        while (sectionStart < sectionEnd) {
            const pair = returnLargestNoPartB(row.slice(sectionStart, sectionEnd));
            currentValue += pair.num;
            sectionStart += pair.pos + 1;
            sectionEnd++;

            if (currentValue.length === 12) {
                break;
            }
        }

        total += Number(currentValue);
    }

    console.log(`Day3B: The total joltage is: ${total}`)
};

const returnLargestNo = (str: string, start: boolean): { num: number, pos: number } => {
    let maxChar = -1;
    let pos: number = -1;
    const maxLength = start ? str.length - 1 : str.length
    for (let i = 0; i < maxLength; i++) {
        const num = Number(str[i]);
        if (num === 9) {
            return { num, pos: i };
        }

        if (num > maxChar) {
            maxChar = num;
            pos = i;
        }
    }

    return { num: maxChar, pos };
}

const returnLargestNoPartB = (str: string): { num: string, pos: number } => {
    if (str.length === 1) {
        return { num: str, pos: 0 };
    }
    let maxChar = -1;
    let pos: number = -1;
    for (let i = 0; i < str.length; i++) {
        const num = Number(str[i]);
        if (num === 9) {
            return { num: str[i]!, pos: i };
        }

        if (num > maxChar) {
            maxChar = num;
            pos = i;
        }
    }

    return { num: String(maxChar), pos };
}