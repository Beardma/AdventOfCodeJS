export const Day4A = (arr: string[]): void => {
    let total: number = 0;
    const arrWidth: number = arr[0]!.length;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arrWidth; j++) {
            if (String(arr[i])[j] !== '@') continue;

            let emptySpace = 0;
            if (i <= 0 || j <= 0 || String(arr[i - 1])[j - 1] === '.') emptySpace++;                         //up and left
            if (i <= 0 || String(arr[i - 1])[j] === '.') emptySpace++;                                       //up and center
            if (i <= 0 || j >= arrWidth - 1 || String(arr[i - 1])[j + 1] === '.') emptySpace++;              //up and right
            if (j <= 0 || String(arr[i])[j - 1] === '.') emptySpace++;                                       //left
            if (j >= arrWidth - 1 || String(arr[i])[j + 1] === '.') emptySpace++;                            //right
            if (i >= arr.length - 1 || j <= 0 || String(arr[i + 1])[j - 1] === '.') emptySpace++;            //down and left
            if (i >= arr.length - 1 || String(arr[i + 1])[j] === '.') emptySpace++;                          //down and center
            if (i >= arr.length - 1 || j >= arrWidth - 1 || String(arr[i + 1])[j + 1] === '.') emptySpace++; //down and right

            if (emptySpace > 4) total++;
        }
    }

    console.log(`Day4A: The total number of paper rolls with less than 4 neighbors: ${total}`);
}

export const Day4B = (arr: string[]): void => {
    let fullArray: string[][] = arr.map(s => s.split(''));
    let total: number = 0;
    const arrWidth: number = arr[0]!.length;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arrWidth; j++) {
            if (fullArray[i]![j] !== '@') continue;

            let emptySpace = 0;
            if (i <= 0 || j <= 0 || fullArray[i - 1]![j - 1] === '.') emptySpace++;                         //up and left
            if (i <= 0 || fullArray[i - 1]![j] === '.') emptySpace++;                                       //up and center
            if (i <= 0 || j >= arrWidth - 1 || fullArray[i - 1]![j + 1] === '.') emptySpace++;              //up and right
            if (j <= 0 || fullArray[i]![j - 1] === '.') emptySpace++;                                       //left
            if (j >= arrWidth - 1 || fullArray[i]![j + 1] === '.') emptySpace++;                            //right
            if (i >= arr.length - 1 || j <= 0 || fullArray[i + 1]![j - 1] === '.') emptySpace++;            //down and left
            if (i >= arr.length - 1 || fullArray[i + 1]![j] === '.') emptySpace++;                          //down and center
            if (i >= arr.length - 1 || j >= arrWidth - 1 || fullArray[i + 1]![j + 1] === '.') emptySpace++; //down and right

            if (emptySpace > 4) {
                total++;
                fullArray[i]![j] = '.';
                i = 0;
                j = 0;
            }
        }
    }

    console.log(`Day4B: The total number of paper rolls removed is: ${total}`);
}