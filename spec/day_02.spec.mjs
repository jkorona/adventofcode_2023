import { task1, task2 } from "../lib/day_02/index.mjs";
import data from "./input/day_02.mjs";

describe("Advent of code: Day 2", () => {

  describe("Part 1", () => {

    it("should calcuate the correct answer to example input #1", () => {
      // given
      const input = [
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
        "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(8);
    });

    it("should calcuate the correct answer to example input #2", () => {
      // given
      const input = [
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
        "Game 5: 6 red, 1 blue, 3 green; 2 blue, 7 red, 2 green",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(8);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task1(data);

      // then
      expect(result).toEqual(2447);
    });

  });

  describe("Part 2", () => {
    it("should calcuate the correct answer to example input #1", () => {
      // given
      const input = [
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
        "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
      ];

      // when
      const result = task2(input);

      // then
      expect(result).toEqual(2286);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task2(data);

      // then
      expect(result).toEqual(56322);
    });

  });

});
