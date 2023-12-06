import { task1, task2 } from "../lib/day_05/index.mjs";
import { readFileSync } from "fs";

const exampleInput = readFileSync("./spec/input/day_05_example.txt", "utf-8");
const fullInput = readFileSync("./spec/input/day_05.txt", "utf-8");

fdescribe("Advent of code: Day 5", () => {

  describe("Part 1", () => {
    it("should calcuate the correct answer to example input", () => {
      // when
      const result = task1(exampleInput);

      // then
      expect(result).toEqual(35);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task1(fullInput);

      // then
      expect(result).toEqual(322500873);
    });
  });

  describe("Part 2", () => {
    it("should calcuate the correct answer to example input", () => {
      // when
      const result = task2(exampleInput);

      // then
      expect(result).toEqual(-1);
    });

    xit("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task2(fullInput);

      // then
      expect(result).toEqual(0);
    });
  });
});