import { expect, test } from "@jest/globals";
import AnalyzeArray from "../src/AnalyzeArray";

test("noraml valid array", () => {
  expect(AnalyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("noraml invalid array", () => {
  expect(AnalyzeArray([1, "a", 3, 4, 2, 6])).toMatchObject({
    average: NaN,
    min: NaN,
    max: NaN,
    length: 6,
  });
});

test("empty array", () => {
  expect(AnalyzeArray([])).toMatchObject({
    average: 0,
    min: undefined,
    max: undefined,
    length: 0,
  });
});
