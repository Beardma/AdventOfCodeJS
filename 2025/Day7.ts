import { rootCertificates } from "tls";
import { chai } from "vitest";

export const Day7A = (input: string[]) => {
    let total = 0;
    let currentRow: number[] = new Array(input.length).fill(0);

    // index 7 on test input
    currentRow[input[0]!.indexOf('S')] = 1;

    for (let i = 1; i < input.length; i++) {
        for (let j = 0; j < input[1]!.length; j++) {
            if (input[i]!.charAt(j) === '^' && currentRow[j] === 1) {
                total++;
                currentRow[j - 1] = 1;
                currentRow[j] = 0;
                currentRow[j + 1] = 1;
            }
        }
    }

    // 1622
    console.log(`Day7A: The total number of tachyon splits is: ${total}`);
}

export const Day7B = (input: string[]) => {
    const firstParticle: particle = { index: input[0]!.indexOf('S'), row: 0 };

    const total = tachyonTimeline(firstParticle, input);

    // 10357305916520
    console.log(`Day7B: The total number of quantum tachyon timelines is: ${total}`);
}

export const tachyonTimeline = (
    particle: particle,
    dataSet: string[],
): number => {

    const memo = new Map<string, number>();

    // Recursion + memoization
    const helper = (row: number, index: number): number => {
        if (row === dataSet.length - 1) {
            return 1;
        }

        const key = `${row}:${index}`;
        const cached = memo.get(key);
        if (cached !== undefined) {
            return cached;
        }

        let result: number;

        if (dataSet[row + 1]!.charAt(index) === '^') {
            const left = helper(row + 1, index - 1);
            const right = helper(row + 1, index + 1);
            result = left + right;
        }
        else {
            result = helper(row + 1, index);
        }

        memo.set(key, result);
        return result;
    }

    return helper(particle.row, particle.index);
}

type particle = {
    index: number,
    row: number,
}