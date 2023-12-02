import { task1, task2 } from "../lib/day_01/index.mjs";
import data from "./input/day_01.mjs";

describe("Advent of code: Day 1", () => {

  describe("Part 1", () => {

    it("should calcuate the correct answer to example input", () => {
      // given
      const input = [
        "1abc2",
        "pqr3stu8vwx",
        "a1b2c3d4e5f",
        "treb7uchet",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(142);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task1(data);

      // then
      expect(result).toEqual(54561);
    });

  });

  describe("Part 2", () => {
    it("should calcuate the correct answer to example input", () => {
      // given
      const input = [
        "two1nine",
        "eightwothree",
        "abcone2threexyz",
        "xtwone3four",
        "4nineeightseven2",
        "zoneight234",
        "7pqrstsixteen",
      ];

      // when
      const result = task2(input);

      // then
      expect(result).toEqual(281);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task2(data);

      // then
      expect(result).toEqual(54076);
    });
  });

});
