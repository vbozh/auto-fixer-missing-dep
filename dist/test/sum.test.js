"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../src/sum");
test("sum adds numbers", () => {
    expect((0, sum_1.sum)([1, 2, 3])).toBe(6);
});
