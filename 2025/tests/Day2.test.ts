import { describe, expect, test } from 'vitest'
import { allPartsAreDivisible, isRepeatingCharacter, missMatchId, oddOneOut } from "../Day2";

interface testPairs { input: number, output: number };

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

        test("allPartsAreDivisible evaluates correctly", () => {
            const allPartsAreDivisiblePairs = [
                { parts: [56, 56, 56], output: true, },
                { parts: [56, 65, 56], output: false, },
                { parts: [96, 96, 96], output: true, },
                { parts: [969, 696], output: false, },
            ]

            allPartsAreDivisiblePairs.forEach(pair => {
                expect(allPartsAreDivisible(pair.parts)).toBe(pair.output);
            });
        });

        test("missMatchId evaluates correctly", () => {
            const testPairs: testPairs[] = [
                { input: 10, output: 0, },
                { input: 11, output: 11, },
                { input: 12, output: 0, },
                { input: 4444, output: 4444, },
                { input: 565656, output: 565656, },
                { input: 565655, output: 0, },
                { input: 2233422334, output: 2233422334, },
                { input: 2233522334, output: 0, },
                { input: 2222322, output: 0, },
                { input: 2323232, output: 0, },
            ]

            testPairs.forEach(pair => {
                expect(missMatchId(pair.input)).toBe(pair.output);
            });
        });
    });
});