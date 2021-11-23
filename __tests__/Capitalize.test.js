import { expect, test } from "@jest/globals";
import Capitalize from "../src/Capitalize";

test("all smallcase word ", () => {
  expect(Capitalize("asdf")).toBe("Asdf");
});

test("all UpperCase word ", () => {
  expect(Capitalize("ASDF")).toBe("Asdf");
});

test("empty string ", () => {
  expect(Capitalize("")).toBe("");
});

test("number String", () => {
  expect(Capitalize("123")).toBe("123");
});
