export const Day6A = (input: string[][]): void => {
    // Transpose this shit because I am lazy
    const transposeInput = transpose(input);

    let total = 0;
    for (let i = 0; i < transposeInput.length; i++) {
        const operator = transposeInput[i]![transposeInput[i]!.length - 1];
        let rowTotal = Number(transposeInput[i]![0]);
        for (let j = 1; j < transposeInput[i]!.length - 1; j++) {
            if (operator === '+') {
                rowTotal += Number(transposeInput[i]![j]);
            }
            else {
                rowTotal = rowTotal * Number(transposeInput[i]![j]);
            }
        }
        total += rowTotal;
    }

    console.log(`Day6A: The grand total is: ${total}`);
    // 4076006202939
}

export const Day6B = (input: string[][]): void => {
    let total = 0;

    input.forEach(item => {
        // get the operator
        const operator = item[item.length - 1]!.charAt(0);

        const rowLength = item[0]!.length;
        let numArr = [];
        // column cursor
        for (let i = 0; i < rowLength; i++) {
            // row cursor
            let num = ''
            for (let j = 0; j < item.length - 1; j++) {
                num += item[j]?.charAt(i);
            }
            num = num.trim();
            numArr.push(num);
        }

        if (operator === '+') {
            total += numArr.reduce((total, current) => {
                return Number(total) + Number(current);
            }, 0);
        }
        else {
            total += numArr.reduce((total, current) => {
                return Number(total) * Number(current);
            }, 1);
        }
    });

    console.log(`Day6B: The grand total is: ${total}`);
}

const transpose = (matrix: string[][]): string[][] => {
    return matrix[0]!.map((_, colIndex) => {
        return matrix.map(row => row[colIndex]!);
    });
};
