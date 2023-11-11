import { describe, expect, test } from "bun:test";

import { Challenge02 } from "@challenges";
import { Challenge02Data } from "@lib";

describe("Testing Compiler", () => {
  test("Should compilate the first program", () => {
    const output = Challenge02.compile(Challenge02Data.program1)

    expect(output).toBe(Challenge02Data.expectedOutput1)
  });

  test("Should compilate the second program", () => {
    const output = Challenge02.compile(Challenge02Data.program2)

    expect(output).toBe(Challenge02Data.expectedOutput2)
  });

  test("Should compilate the third program", () => {
    const output = Challenge02.compile(Challenge02Data.program3)

    expect(output).toBe(Challenge02Data.expectedOutput3)
  });
});
