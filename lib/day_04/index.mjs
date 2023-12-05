import sum from "../utils/sum.mjs";

const parseLine = line => {
  return line
    .split(/[:|]/)
    .slice(1)
    .map(string => string.split(" ").filter(Boolean).map(x => parseInt(x)));
};

const calcuateScore = ([winning, drawn]) => {
  return drawn.reduce((acc, curr) => {
    if (winning.includes(curr)) {
      return acc === 0 ? 1 : acc * 2;
    }
    return acc;
  }, 0);
}

// https://adventofcode.com/2023/day/4
export function task1(input) {
  const scores = input
    .map(parseLine)
    .map(calcuateScore);
  return sum(scores);
}

const multiplyCards = (cards) => {
  const dict = cards.reduce((d, _, index) => ({ ...d, [index]: 1 }), {})
  const winningCards = cards.map(([winning, drawn]) => {
    return drawn.filter(number => winning.includes(number)).length;
  });

  return cards.reduce((result, _, index) => {
    const numberOfWinningCards = winningCards[index];
    const numberOfCopies = result[index];
    for (let i = 0; i < numberOfWinningCards; i++) {
      result[index + i + 1] += numberOfCopies;
    }
    return result;
  }, dict);
};

// https://adventofcode.com/2023/day/4#part2
export function task2(input) {
  const cards = input.map(parseLine);
  const scores = cards.map(calcuateScore);
  const allCards = multiplyCards(cards, scores);

  return sum(Object.values(allCards));
}
