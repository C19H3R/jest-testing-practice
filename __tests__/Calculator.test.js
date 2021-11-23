import { expect, test } from "@jest/globals";
import Calculator from "../src/Calculator";

test("testing add valid", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test("testing add invalidvalid", () => {
  expect(Calculator.add(1, "asdf")).toBe(NaN);
});

test("testing subtract valid", () => {
  expect(Calculator.subtract(5, 2)).toBe(3);
});

test("testing subtract invalid", () => {
  expect(Calculator.subtract(5, "Asdf")).toBe(NaN);
});

test("testing divide valid", () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});

test("testing divide invalid values", () => {
  expect(Calculator.divide(10, 0)).toBe(Infinity);
});

test("testing divide invalid input", () => {
  expect(Calculator.divide(10, "Asdf")).toBe(NaN);
});

test("testing multiply valid", () => {
  expect(Calculator.multiply(10, 2)).toBe(20);
});

test("testing multiply invalid", () => {
  expect(Calculator.multiply(10, "asdf")).toBe(NaN);
});
