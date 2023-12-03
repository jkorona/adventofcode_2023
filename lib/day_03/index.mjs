import sum from "../utils/sum.mjs";

const hasAdjacentSymbol = (input, x, y, size) => {
  let surroundings = [
    input[y - 1]?.substring(x - 1, x + size + 1),
    input[y][x - 1],
    input[y][x + size],
    input[y + 1]?.substring(x - 1, x + size + 1),
  ].join("");
  
  return /[^\d\.]/g.test(surroundings);
}

export function task1(input) {
  const pattern = /\d+/g;
  const numbers = input
    .map((line, lineNo) => {
      let match, numbers = [];
      while ((match = pattern.exec(line)) !== null) {
        if (hasAdjacentSymbol(input, match.index, lineNo, match[0].length)) {
          numbers.push(parseInt(match[0]));
        }
      }
      return numbers;
    })
    .flat()

  return sum(numbers);
}
