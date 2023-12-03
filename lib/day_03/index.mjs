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

const findGearSymbol = (input, x, y, size) => {
  const left = input[y][x - 1];
  const right = input[y][x + size];
  const top = input[y - 1]?.substring(x - 1, x + size + 1);
  const bottom = input[y + 1]?.substring(x - 1, x + size + 1);

  if (left === "*") {
    return [y, x - 1];
  }
  if (right === "*") {
    return [y, x + size];
  }
  if (top?.includes("*")) {
    return [y - 1, Math.max(0, x - 1) + top.indexOf("*")];
  }
  if (bottom?.includes("*")) {
    return [y + 1, Math.max(0, x - 1) + bottom.indexOf("*")];
  }
  return null;
}

export function task2(input) {
  const pattern = /\d+/g;
  const gears = {};
  input.forEach((line, lineNo) => {
    let match, numbers = [];
    while ((match = pattern.exec(line)) !== null) {
      const gearPosition = findGearSymbol(input, match.index, lineNo, match[0].length);
      if (gearPosition) {
        const number = parseInt(match[0]);
        const key = gearPosition.join(",");
        if (gears[key]) {
          gears[key].push(number);
        } else {
          gears[key] = [number];
        }
      }
    }
    return numbers;
  });

  const ratios = Object.values(gears)
    .filter(gear => gear.length === 2)
    .map(gear => gear[0] * gear[1]);

  return sum(ratios);
}
