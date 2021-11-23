import { expect, test } from "@jest/globals";
import ReverseString from "../src/ReverseString";

test("reverse wort", () => {
  expect(ReverseString("ASDF")).toBe("FDSA");
});
