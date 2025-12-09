import { rootCertificates } from "tls";

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

    console.log(`Day7A: The total number of tachyon splits is: ${total}`);
}

export const Day7B = (input: string[]) => {
    const firstParticle: particle = { index: input[0]!.indexOf('S'), row: 0 };

    const total = tachyonTimeline(firstParticle, input);

    console.log(`Day7B: The total number of quantum tachyon timelines is: ${total}`);
}

const tachyonTimeline = (
    particle: particle,
    dataSet: string[],
): number => {
    if (particle.row === dataSet.length - 1) {
        return 1;
    }
    else if (dataSet[particle.row + 1]!.charAt(particle.index) === '^') {
        const leftParticle = { index: particle.index - 1, row: particle.row + 1 };
        const rightParticle = { index: particle.index + 1, row: particle.row + 1 };
        return tachyonTimeline(leftParticle, dataSet) + tachyonTimeline(rightParticle, dataSet);
    }
    else {
        const staightParticle = { index: particle.index, row: particle.row + 1 };
        return tachyonTimeline(staightParticle, dataSet);
    }
}

type particle = {
    index: number,
    row: number,
}