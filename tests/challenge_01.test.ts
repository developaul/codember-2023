import { expect, test } from "bun:test";

import { Challenge01 } from "../challenges";
import { Challenge01Data } from "../data";

test("Should search pattern", () => {
  const pattern = Challenge01.searchPattern(Challenge01Data.message)

  expect(pattern).toBe(Challenge01Data.expectedPattern)
});