import { describe, expect, it } from "vitest";

import sum from "../../src/utils/myfunctions";

describe("mySum", () => {
  it("returns 0 with no params", () => {
    expect(sum()).toBe(0);
  });
  it("returns 7 for [7]", () => {
    expect(sum(7)).toBe(7);
  });
  it("returns 3 for [1,2]", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
