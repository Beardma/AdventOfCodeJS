export const Day5A = (ranges: string[], values: string[]): void => {
    const numValues = values
        .map(Number)
        .sort((a, b) => a - b);

    const numRanges: Range[] = ranges.map(pair => {
        const [start, end] = pair.split('-');
        return { start: Number(start), end: Number(end) };
    });

    numRanges.sort((a, b) => a.start - b.start)

    let total: number = 0;

    for (let i = 0; i < numValues.length; i++) {
        for (let j = 0; j < numRanges.length; j++) {
            if (numValues[i]! >= numRanges[j]!.start) {
                if (numValues[i]! <= numRanges[j]!.end) {
                    total++;
                    break
                }
            }
        }
    }

    console.log(`Day5A: The total number of fresh foods is: ${total}`);
}

export const Day5B = (ranges: string[]): void => {
    let freshIds: number[] = [];

    const numRanges: Range[] = ranges.map(pair => {
        const [start, end] = pair.split('-');
        return { start: Number(start), end: Number(end) };
    });

    for (let i = 0; i < numRanges.length; i++) {
        for (let j = numRanges[i]!.start; j <= numRanges[i]!.end; j++) {
            if (!freshIds.includes(j)) {
                freshIds.push(j);
            }
        }
        console.log(`Progress: ${i} / ${numRanges.leng}`)
    }

    console.log(`Day5B: The total number of fresh ingredient ID's is: ${freshIds.length}`);
}

type Range = {
    end: number
    start: number
}