const primeNo: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,];

const isRepeatingCharacter = (str: string): boolean => {
    for (const ch of String(str)) {
        if (ch !== String(str)[0]) {
            return false;
        }
    }

    return true;
}

const oddOneOut = (str: string): boolean => {
    let counts: Record<string, number> = {};

    for (const char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }

    for (const key in counts) {
        if (counts[key] === 1) {
            return true;
        }
    }

    return false;
}

export const Day2A = (values: string[]): void => {
    let total: number = 0;
    for (let i = 0; i < values.length; i++) {
        const indexHyphen: number = values[i]!.indexOf('-');
        const start: number = Number(values[i]!.slice(0, indexHyphen));
        const end: number = Number(values[i]!.slice(indexHyphen + 1));

        for (let j = start; j <= end; j++) {
            if (String(j).length % 2 !== 0) {
                continue;
            }

            if (String(j).slice(0, String(j).length / 2) === String(j).slice(String(j).length / 2)) {
                total += j;
            }
        }
    }

    console.log(`Day2A: The total of the invalid ID codes is: ${total}`);
}

export const Day2B = (values: string[]): void => {
    let total: number = 0;
    for (let i = 0; i < values.length; i++) {
        const indexHyphen: number = values[i]!.indexOf('-');
        const start: number = Number(values[i]!.slice(0, indexHyphen));
        const end: number = Number(values[i]!.slice(indexHyphen + 1));

        for (let j = start; j <= end; j++) {
            // console.log(`Processing number: ${j}`);
            if (isRepeatingCharacter(String(j))) {
                // console.log(`Repeating Number!`);
                // console.log(`--- DONE ---`);
                total += j;
                continue;
            }
            const numberLength: number = String(j).length;
            if (primeNo.includes(numberLength)) {
                // console.log(`Prime and not repeating!`);
                // console.log(`--- DONE ---`);
                continue;
            }

            if (oddOneOut(String(j))) {
                // console.log(`Odd one out!`);
                // console.log(`--- DONE ---`);
                continue;
            }

            for (let k = 2; k <= numberLength / 2; k++) {
                if (numberLength % k !== 0) {
                    continue;
                }

                const strArr: number[] = splitIntoChunks(String(j), k);
                // if (j > 5000) {
                //     console.log(strArr);
                // }
                let arePartsEqual: boolean = true;

                for (let l = 1; l < k; l++) {
                    for (let m = 0; m < l; m++) {
                        if (strArr[l] !== strArr[m]) {
                            // console.log(`Parts NOT equal! m-index: ${m}, m-value: ${strArr[m]}, l-index: ${l}, l-value: ${strArr[l]}`);
                            arePartsEqual = false;
                        }
                    }
                }

                if (arePartsEqual) {
                    // console.log('Parts are equal!');
                    total += j;
                    break;
                }
            }
            // console.log(`--- DONE ---`);
        }
    }

    console.log(`Day2A: The total of the invalid ID codes is: ${total}`);
    // Tries
    // 69564213338 => Too high
}

const splitIntoChunks = (str: string, parts: number): number[] => {
    const length = str.length / parts;
    const chunks: string[] = [];

    for (let i = 0; i < str.length; i += length) {
        chunks.push(str.slice(i, i + length))
    }

    return chunks.map(Number);
}