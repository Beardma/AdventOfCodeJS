import { describe, expect, test } from 'vitest'
import { allPartsAreDivisible, isRepeatingCharacter, missMatchId, oddOneOut } from "../Day2";

const allPartsAreDivisiblePairs = [
    {
        parts: [56, 56, 56],
        output: true,
    },
    {
        parts: [56, 65, 56],
        output: false,
    },
    {
        parts: [96, 96, 96],
        output: true,
    },
    {
        parts: [969, 696],
        output: false,
    },
]

interface testPairs { input: number, output: number };

const testPairs: testPairs[] = [
    {
        input: 10,
        output: 0,
    },
    {
        input: 11,
        output: 11,
    },
    {
        input: 12,
        output: 0,
    },
    {
        input: 4444,
        output: 4444,
    },
    {
        input: 565656,
        output: 565656,
    },
    {
        input: 565655,
        output: 0,
    },
]

describe("Day 2 tests", () => {
    describe("Part B tests", () => {
        test("expect isRepeatingCharacter to be working", () => {
            const testCases = [
                {
                    case: '55',
                    output: true,
                },
                {
                    case: '555',
                    output: true,
                },
                {
                    case: '555',
                    output: true,
                },
                {
                    case: '455',
                    output: false,
                },
                {
                    case: '545',
                    output: false,
                },
                {
                    case: '554',
                    output: false,
                },
            ]

            testCases.forEach(obj => {
                expect(isRepeatingCharacter(obj.case)).toBe(obj.output);
            })
        })

        test("expect oddOneOut to be working", () => {
            const testCases = [
                {
                    case: '55',
                    output: false,
                },
                {
                    case: '555',
                    output: false,
                },
                {
                    case: '555555555555',
                    output: false,
                },
                {
                    case: '11223344555566778899',
                    output: false,
                },
                {
                    case: '455',
                    output: true,
                },
                {
                    case: '545',
                    output: true,
                },
                {
                    case: '555555665555575',
                    output: true,
                },
                {
                    case: '1122334455667788990',
                    output: true,
                },
            ]

            testCases.forEach(obj => {
                expect(oddOneOut(obj.case)).toBe(obj.output);
            })
        })

        test("allPartsAreDivisible evaluates correctly", () => {
            allPartsAreDivisiblePairs.forEach(pair => {
                expect(allPartsAreDivisible(pair.parts)).toBe(pair.output);
            });
        });

        test("missMatchId evaluates correctly", () => {
            testPairs.forEach(pair => {
                expect(missMatchId(pair.input)).toBe(pair.output);
            });
        });

        test("missMatchId evaluates correctly", () => {
            const testCase = `1698522-1698528`;
            const indexHyphen: number = testCase.indexOf('-');
            const start: number = Number(testCase.slice(0, indexHyphen));
            const end: number = Number(testCase.slice(indexHyphen + 1));

            for (let j = start; j <= end; j++) {
                expect(missMatchId(j)).toBe(0);
            }
        });
    });
});