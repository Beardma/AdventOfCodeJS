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

}

const transpose = (matrix: string[][]): string[][] => {
    return matrix[0]!.map((_, colIndex) => {
        return matrix.map(row => row[colIndex]!);
    });
};
