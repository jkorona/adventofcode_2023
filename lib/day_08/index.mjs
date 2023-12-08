

const makeGraph = (input) => {
  const regExp = /([A-Z]{3}) = \(([A-Z]{3}), ([A-Z]{3})\)/;
  return input.reduce((result, line) => {
    const [_, node, L, R] = regExp.exec(line);
    return { ...result, [node]: { L, R } }
  }, {});
}

export function task1(input) {
  const directions = input.shift().split("");
  const graph = makeGraph(input);

  let currentNode = "AAA";
  let cursor = 0;
  let nrOfSteps = 0;
  while(currentNode !== "ZZZ") {
    const direction = directions[cursor];
    const nextNode = graph[currentNode][direction];
    currentNode = nextNode;
    cursor = (cursor + 1) % directions.length;
    nrOfSteps++;
  }

  return nrOfSteps;
}

export function task2() {
  return 0;
}
