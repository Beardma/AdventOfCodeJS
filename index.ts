import { Day1A, Day1B } from './2025/Day1';
import { Day2A, Day2B } from './2025/Day2';
import { getText as getTextDay1 } from './2025/inputs/Day1inputs'
import { getInput, getInput as getInputDay2 } from './2025/inputs/Day2inputs';

const main = () => {
    // Day1A(getTextDay1());
    // Day1B(getTextDay1());
    Day2A(getInputDay2());
    Day2B(getInputDay2());
};

main();