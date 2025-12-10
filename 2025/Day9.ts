export const Day9A = (input: string[]): void => {
    const numArr: number[][] = input.map(item => {
        return item.split(',').map(Number);
    })

    let furthestDistance = 0;
    let point1: number[] = [];
    let point2: number[] = [];

    for (let i = 0; i < numArr.length; i++) {
        for (let j = numArr.length - 1; j > i; j--) {
            const distance = findDistance(numArr[i]!, numArr[j]!);
            if (distance > furthestDistance) {
                furthestDistance = distance;
                point1 = numArr[i]!;
                point2 = numArr[j]!;
            }
        }
    }

    let width = point1[0]! - point2[0]!;
    if (width < 0) {
        width = width * -1;
    }

    let length = point1[1]! - point2[1]!;
    if (length < 0) {
        length = length * -1;
    }

    width++;
    length++;

    // 4777824480
    console.log(`Day9A: The area of the largest rectangle is: ${length * width}`);
}

export const Day9B = (input: string[]): void => {
    const total = 0;

    console.log(`Day9B: The area of the largest rectabngle is: ${total}`);
}

const findDistance = (point1: number[], point2: number[]): number => {
    return Math.sqrt(
        Math.pow(point1[0]! - point2[0]!, 2) + Math.pow(point1[1]! - point2[1]!, 2)
    );
}