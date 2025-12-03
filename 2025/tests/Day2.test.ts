import { describe, expect, test } from 'vitest'
import { missMatchId } from "../Day2";

interface testPairs { input: number, output: number };

describe("Day 2 tests", () => {
    describe("Part B tests", () => {
        test("missMatchId evaluates correctly", () => {
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
            ]

            testPairs.forEach(pair => {
                expect(missMatchId(pair.input)).toBe(pair.output);
            });
        })
    })
})