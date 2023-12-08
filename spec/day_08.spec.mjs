import { task1, task2 } from "../lib/day_08/index.mjs";
import input from "./input/day_8.mjs";

describe("Advent of code: Day 8", () => {

  describe("Part 1", () => {
    it("should calcuate the correct answer to example input #1", () => {
      // given
      const input = [
        "RL",
        "AAA = (BBB, CCC)",
        "BBB = (DDD, EEE)",
        "CCC = (ZZZ, GGG)",
        "DDD = (DDD, DDD)",
        "EEE = (EEE, EEE)",
        "GGG = (GGG, GGG)",
        "ZZZ = (ZZZ, ZZZ)",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(2);
    });

    it("should calcuate the correct answer to example input #2", () => {
      // given
      const input = [
        "LLR",
        "AAA = (BBB, BBB)",
        "BBB = (AAA, ZZZ)",
        "ZZZ = (ZZZ, ZZZ)",
      ];

      // when
      const result = task1(input);

      // then
      expect(result).toEqual(6);
    });

    it("should calcuate the correct answer to full puzzle input", () => {
      // when
      const result = task1(input);

      // then
      expect(result).toEqual(14429);
    });
  });

  describe("Part 2", () => {
    it("should calcuate the correct answer to example input #1", () => {
      // given
      const input = [
        "LR",
        "11A = (11B, XXX)",
        "11B = (XXX, 11Z)",
        "11Z = (11B, XXX)",
        "22A = (22B, XXX)",
        "22B = (22C, 22C)",
        "22C = (22Z, 22Z)",
        "22Z = (22B, 22B)",
        "XXX = (XXX, XXX)",
      ];

      // when
      const result = task2(input);

      // then
      expect(result).toEqual(6);
    });
  });

  it("should calcuate the correct answer to full puzzle input", () => {
    // when
    const result = task2([...input]);

    // then
    expect(result).toEqual(10921547990923);
  });

});