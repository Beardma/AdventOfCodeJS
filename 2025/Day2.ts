const primeNo: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23,];

export const isRepeatingCharacter = (str: string): boolean => {
    for (const ch of String(str)) {
        if (ch !== String(str)[0]) {
            return false;
        }
    }

    return true;
}

export const Day2A = (values: string[]): void => {
    let totalPartA: number = 0;
    for (let i = 0; i < values.length; i++) {
        const indexHyphen: number = values[i]!.indexOf('-');
        const start: number = Number(values[i]!.slice(0, indexHyphen));
        const end: number = Number(values[i]!.slice(indexHyphen + 1));

        for (let j = start; j <= end; j++) {
            if (String(j).length % 2 !== 0) {
                continue;
            }

            if (String(j).slice(0, String(j).length / 2) === String(j).slice(String(j).length / 2)) {
                totalPartA += j;
            }
        }
    }

    console.log(`Day2A: The total of the invalid ID codes is: ${totalPartA}`);
    // Answer: 52316131093
}

let totalPartB = 0;
const setTotal = (num: number): void => {
    totalPartB = num;
}
const getTotal = (): number => {
    return totalPartB;
}

export const Day2B = (values: string[]): void => {
    for (let i = 0; i < values.length; i++) {
        const indexHyphen: number = values[i]!.indexOf('-');
        const start: number = Number(values[i]!.slice(0, indexHyphen));
        const end: number = Number(values[i]!.slice(indexHyphen + 1));

        for (let j = start; j <= end; j++) {
            const num = missMatchId(j);
            if (num !== 0) {
                setTotal(getTotal() + num);
            }
        }
    }

    console.log(`Day2B: The total of the invalid ID codes is: ${getTotal()}`);
    // Tries
    // 69,564,213,338 => Too high
    // 52,316,131,093 => too low (part A answer, should be lower because there should be more invalid's)
}

export const missMatchId = (num: number): number => {
    if (isRepeatingCharacter(String(num))) {
        return num;
    }

    const numberLength: number = String(num).length;
    if (primeNo.includes(numberLength)) {
        return 0;
    }

    for (let k = 2; k <= Math.floor(numberLength / 2); k++) {
        if (numberLength % k !== 0) {
            continue;
        }

        const chunks: number[] = splitIntoChunks(String(num), k);

        if (allPartsAreDivisible(chunks)) {
            return num;
        }
    }

    return 0;
}

const splitIntoChunks = (str: string, parts: number): number[] => {
    const length = str.length / parts;
    const chunks: string[] = [];

    for (let i = 0; i < str.length; i += length) {
        chunks.push(str.slice(i, i + length))
    }

    return chunks.map(Number);
}

export const allPartsAreDivisible = (numArr: number[]): boolean => {
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] !== numArr[0]) {
            return false;
        }
    }

    return true;
}