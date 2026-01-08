import { sum } from "../src/sum";

test("sum adds numbers", () => {
    expect(sum([1, 2, 3])).toBe(6);
});