export const Day8A = (junctionBoxes: string[]): void => {
    let juncBoxNumberCords: number[][] = junctionBoxes.map(item => {
        return item
            .split(',')
            .map(Number);
    })

    let foundDistances = new Map<number[], number>();

    while (juncBoxNumberCords.length > 0) {

    }

    const total = 0;

    console.log(`Day8A: The size of the three largest circuits multiplied is: ${total}`);
}

export const Day8B = (input: string[]): void => {
    const total = 0;

    console.log(`Day8B: The size of the three largest circuits multiplied is: ${total}`);
}

const euclideanDistance = (point1: number[], point2: number[]): number => {
    let sum = 0
    for (let i = 0; i < point1.length; i++) {
        sum += Math.pow((point1[i]! - point2[i]!), 2);
    }

    return Math.sqrt(sum);
}

const shortestDistancePair = (points: number[][]): number[][] => {
    let shortestDist;
    let pair1: number[] = [];
    let pair2: number[] = [];

    for (let i = 0; i < points.length; i++) {
        for (let j = points.length - 1; j > i; j--) {
            const dist = euclideanDistance(points[i]!, points[j]!);
            if (!shortestDist || dist < shortestDist) {
                shortestDist = dist;
                pair1 = points[i]!;
                pair2 = points[j]!;
            }
        }
    }

    return [pair1, pair2];
}