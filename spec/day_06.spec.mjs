import { task1, task2 } from "../lib/day_06/index.mjs";

describe("Advent of code: Day 6", () => {

  describe("Part 1", () => {
    it("should calcuate the correct answer to example input", () => {
      // given
      const input = [
        "Time:      7  15   30",
        "Distance:  9  40  200",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(288);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // given
      const input = [
        "Time:        41     96     88     94",
        "Distance:   214   1789   1127   1055"
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(4811940);
    });
  });

  describe("Part 2", () => {
    it("should calcuate the correct answer to example input", () => {
      // given
      const input = [
        "Time:      7  15   30",
        "Distance:  9  40  200",
      ];

      // when
      const result = task2(input);

      // then
      expect(result).toEqual(71503);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      const input = [
        "Time:        41     96     88     94",
        "Distance:   214   1789   1127   1055"
      ];

      // when
      const result = task2(input);

      // then
      expect(result).toEqual(30077773);
    });
  });
});