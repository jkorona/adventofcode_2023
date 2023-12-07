const regExp = /(\d+)/g

const group = (numbers, size) => {
  const result = [];
  for (let i = 0; i < numbers.length; i += size) {
    result.push(numbers.slice(i, i + size));
  }
  return result;
}

const parse = (input) => {
  const lines = input.split("\n\n");
  const numbers = lines.map(line => line.match(regExp).map(x => parseInt(x)));

  const seeds = numbers.shift();
  const maps = numbers.map((number) => group(number, 3));

  return { seeds, maps };
}

const findLowestLocation = (seeds, maps) => {
  return seeds.reduce((result, seed) => {
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
}

// https://adventofcode.com/2023/day/5
export function task1(input) {
  const { seeds, maps } = parse(input);

  return findLowestLocation(seeds, maps);
}

// https://adventofcode.com/2023/day/5#part2
export function task2(input) {
  const { seeds, maps } = parse(input);

  const ranges = group(seeds, 2);
  let lowestLocation = Number.MAX_VALUE;

  for (let range of ranges) {
    const [start, length] = range;

    for (let seed = start; seed < start + length; seed++) {
      const location = maps.reduce((src, map) => {
        for (let mapping of map) {
          const [destStart, srcStart, length] = mapping;
          if (src >= srcStart && src < srcStart + length) {
            return destStart + (src - srcStart);
          }
        }
        return src;
      }, seed);

      if (location < lowestLocation) {
        lowestLocation = location;
      }
    }
  }

  return lowestLocation;
}
