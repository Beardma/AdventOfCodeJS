export const Day3A = (arr: string[]): void => {
    let total: number = 0;
    for (let i = 0; i < arr.length; i++) {
        const row = arr[i]!;
        const start = returnLargestNo(row, true);
        const end = returnLargestNo(row.slice(start.pos + 1), false)
        total += Number(String(start.num) + String(end.num));
    }

    console.log(`Day3A: The total joltage is: ${total}`)
};

export const Day3B = (arr: string[]): void => {

    console.log(`Day3B: The total joltage is: ??? `)
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