const regExp = /(\d+)/g

const group = (numbers) => {
  const result = [];
  for (let i = 0; i < numbers.length; i += 3) {
    result.push(numbers.slice(i, i + 3));
  }
  return result;
}

const parse = (input) => {
  const lines = input.split("\n\n");
  const numbers = lines.map(line => line.match(regExp).map(x => parseInt(x)));

  const seeds = numbers.shift();
  const maps = numbers.map(group);

  return { seeds, maps };
}

// https://adventofcode.com/2023/day/5
export function task1(input) {
  const { seeds, maps } = parse(input);

  const result = seeds.reduce((result, seed) => {
    const location = maps.reduce((src, map) => {
      for (let mapping of map) {
        const [destStart, srcStart, length] = mapping;
        if (src >= srcStart && src < srcStart + length) {
          return destStart + (src - srcStart);
        }
      }
      return src;
    }, seed);

    return (location < result) ? location : result
  }, Number.MAX_VALUE);

  return result;
}

// https://adventofcode.com/2023/day/5#part2
export function task2(input) {
  return 0;
}
