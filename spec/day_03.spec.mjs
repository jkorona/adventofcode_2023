import { task1 } from "../lib/day_03/index.mjs";
import data from "./input/day_03.mjs";

fdescribe("Advent of code: Day 3", () => {

  describe("Part 1", () => {
    it("should calcuate the correct answer to example input #1", () => {
      // given
      const input = [
        "467..114..",
        "...*......",
        "..35..633.",
        "......#...",
        "617*......",
        ".....+.58.",
        "..592.....",
        "......755.",
        "...$.*....",
        ".664.598..",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(4361);
    });

    it("should calcuate the correct answer to example input #2", () => {
      // given
      const input = [
        "...",
        ".3.",
        "...",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(0);
    });

    it("should calcuate the correct answer to example input #3", () => {
      // given
      const input = [
        "1*",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(1);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task1(data);

      // then
      expect(result).toEqual(527369);
    });
  });

});