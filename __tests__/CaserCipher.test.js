import { expect, test } from "@jest/globals";
import CaserCipher from "../src/CaserCipher";

test("ceaserCipher basic test <Word>", () => {
  expect(CaserCipher("bcdefghijklmnopqrstuvwxyza", -1)).toBe(
    "abcdefghijklmnopqrstuvwxyz"
  );
});

test("ceaserCipher basic test <Word>", () => {
  expect(CaserCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});
