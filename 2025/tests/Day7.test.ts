import { describe, expect, test } from 'vitest';
import { tachyonTimeline } from '../Day7';

const test1 = `..S..
.....
.....`;

const test2 = `..S..
.....
..^..
.....`;

const test3 = `..S..
.....
..^..
.....
.^...
.....`;

const test4 = `..S..
.....
..^..
.....
.^.^.
.....`;

const test5 = `..S..
.....
..^..
.....
.^.^.
.....
..^..
.....`;

const test6 = `..S..
.....
..^..
.....
..^..
.....`;

const theTest = `.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`;

describe("tachyonTimeline tests", () => {
    test("straight returns one", () => {
        expect(tachyonTimeline({ row: 0, index: 2 }, test1.split('\n'))).toBe(1);
    });

    test("one split returns 2", () => {
        expect(tachyonTimeline({ row: 0, index: 2 }, test2.split('\n'))).toBe(2);
    });

    test("two split retuns 3", () => {
        expect(tachyonTimeline({ row: 0, index: 2 }, test3.split('\n'))).toBe(3);
    })

    test("three splits retuns 4", () => {
        expect(tachyonTimeline({ row: 0, index: 2 }, test4.split('\n'))).toBe(4);
    })

    test("diamond split returns 6", () => {
        expect(tachyonTimeline({ row: 0, index: 2 }, test5.split('\n'))).toBe(6);
    })

    test("two splits inline only returns 2", () => {
        expect(tachyonTimeline({ row: 0, index: 2 }, test6.split('\n'))).toBe(2);
    })

    test("the mini test should return 40", () => {
        const splitArr = theTest.split('\n');
        expect(tachyonTimeline({ row: 0, index: splitArr[0]!.indexOf('S') }, splitArr)).toBe(40);
    })
})