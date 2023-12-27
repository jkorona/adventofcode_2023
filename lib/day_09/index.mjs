function parse(line) {
  return line.split(" ").map((s) => parseInt(s, 10));
}

function diff(line) {
  const lines = [line];
  let sumOfNumbers = 1;

  while (sumOfNumbers !== 0) {
    const prevLine = lines.at(-1);
    const nextLine = [];

    sumOfNumbers = 0;

    for (let i = 0; i < prevLine.length - 1; i++) {
      const value = prevLine[i + 1] - prevLine[i];
      sumOfNumbers = sumOfNumbers + value;
      nextLine.push(value);
    }

    lines.push(nextLine);
  }

  return lines;
}

function extrapolateNext(diff) {
  const copy = [...diff];
  for (let i = copy.length - 1; i > 0; i--) {
    const currentLine = copy[i];
    const nextLine = copy[i - 1];

    nextLine.push(currentLine.at(-1) + nextLine.at(-1));
  }
  return copy[0].at(-1);
}

function extrapolatePrev(diff) {
  const copy = [...diff];
  for (let i = copy.length - 1; i > 0; i--) {
    const currentLine = copy[i];
    const nextLine = copy[i - 1];

    nextLine.unshift(nextLine.at(0) - currentLine.at(0));
  }
  return copy[0][0];
}

export function task1(input) {
  return input.reduce((result, line) => {
    const value = extrapolateNext(diff(parse(line)));
    return result + value;
  }, 0)
}

export function task2(input) {
  return input.reduce((result, line) => {
    const value = extrapolatePrev(diff(parse(line)));
    return result + value;
  }, 0)
}
