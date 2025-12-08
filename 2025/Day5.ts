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
    // 674
}

export const Day5B = (ranges: string[]): void => {

    const numRanges: Range[] = ranges.map(pair => {
        const [start, end] = pair.split('-');
        return { start: Number(start), end: Number(end) };
    });

    numRanges.sort((a, b) => a.start - b.start);

    let newRanges: Range[] = [];
    newRanges.push({ start: numRanges[0]!.start, end: numRanges[0]!.end });

    for (let i = 1; i < numRanges.length; i++) {
        for (let j = 0; j < newRanges.length; j++) {
            if (numRanges[i]!.start >= newRanges[j]!.start
                && numRanges[i]!.end <= newRanges[j]!.end
            ) {
                break;
            }
            if (numRanges[i]!.start >= newRanges[j]!.start
                && numRanges[i]!.start <= newRanges[j]!.end + 1
                && numRanges[i]!.end > newRanges[j]!.end
            ) {
                newRanges[j]!.end = numRanges[i]!.end;
                break;
            }
            if (numRanges[i]!.start > newRanges[j]!.end && newRanges[j + 1]) {
                continue;
            }
            else {
                newRanges.push({ start: numRanges[i]!.start, end: numRanges[i]!.end })
                break;
            }
        }
    }

    let counter = 1;
    while (counter < newRanges.length) {
        if (newRanges[counter - 1]!.end > newRanges[counter]!.start) {
            newRanges[counter]!.start = newRanges[counter]!.start;
            newRanges.splice(counter - 1, 1);
        }
        else {
            counter++;
        }
    }

    let total = 0;
    for (let i = 0; i < newRanges.length; i++) {
        total += newRanges[i]!.end - newRanges[i]!.start + 1;
    }

    console.log(`Day5B: The total number of fresh ingredient ID's is: ${total}`);
    // 352509891817881
}

type Range = {
    end: number
    start: number
}