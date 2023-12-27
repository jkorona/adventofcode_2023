import { task1, task2 } from "../lib/day_09/index.mjs";
import input from "./input/day_09.mjs";

describe("Advent of code: Day 9", () => {

  describe("Part 1", () => {
    it("should calcuate the correct answer to example input #1", () => {
      // given
      const input = [
        "0 3 6 9 12 15",
        "1 3 6 10 15 21",
        "10 13 16 21 30 45",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(114);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task1(input);

      // then
      expect(result).toEqual(1887980197);
    });
  });

  describe("Part 2", () => {
    it("should calcuate the correct answer to example input #1", () => {
      // given
      const input = [
        "0 3 6 9 12 15",
        "1 3 6 10 15 21",
        "10 13 16 21 30 45",
      ];

      // when
      const result = task2(input);

      // then
      expect(result).toEqual(2);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task2(input);

      // then
      expect(result).toEqual(990);
    });
  });

});