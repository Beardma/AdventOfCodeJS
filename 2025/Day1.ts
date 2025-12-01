export const Day1A = (values: string[]): void => {
    var currentValue: number = 50;
    var numberOfZero: number = 0;

    for (let i = 0; i < values.length; i++) {
        const direction: string = values[i]!.slice(0, 1);
        const distance: number = Number(values[i]!.slice(1));

        if (direction === "R") {
            currentValue += distance;
        }
        else {
            currentValue -= distance;
        }

        currentValue = currentValue % 100;
        if (currentValue < 0) {
            currentValue = currentValue + 100;
        }

        if (currentValue === 0) {
            numberOfZero++;
        }
    }

    console.log(`Day 1A: The number of 0's is: ${numberOfZero}`);
};

export const Day1B = (values: string[]): void => {
    var currentValue: number = 50;
    var numberOfZero: number = 0;

    for (let i = 0; i < values.length; i++) {
        const direction: string = values[i]!.slice(0, 1);
        let distance: number = Number(values[i]!.slice(1));

        const quotient = Math.floor(distance / 100);
        distance = distance % 100;

        if (direction === "R") {
            currentValue += distance;
            numberOfZero += currentValue >= 100 ? 1 : 0;
        }
        else {
            numberOfZero += currentValue !== 0 && currentValue <= distance ? 1 : 0;
            currentValue -= distance;
        }

        numberOfZero += quotient;

        currentValue = currentValue % 100;
        if (currentValue < 0) {
            currentValue = currentValue + 100;
        }
    }

    console.log(`Day 1B: The number of 0's is: ${numberOfZero}`);
};