import { task1, task2 } from "../lib/day_07/index.mjs";
import input from "./input/day_07.mjs";

describe("Advent of code: Day 7", () => {

  describe("Part 1", () => {
    it("should calcuate the correct answer to example input", () => {
      // given
      const input = [
        "32T3K 765",
        "T55J5 684",
        "KK677 28",
        "KTJJT 220",
        "QQQJA 483",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(6440);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task1(input);

      // then
      expect(result).toEqual(251029473);
    });
  });

  describe("Part 2", () => {
    it("should calcuate the correct answer to example input", () => {
      // given
      const input = [
        "32T3K 765",
        "T55J5 684",
        "KK677 28",
        "KTJJT 220",
        "QQQJA 483",
      ];

      // when
      const result = task2(input);

      // then
      expect(result).toEqual(5905);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task2(input);

      // then
      expect(result).toEqual(251003917);
    });
  });
});