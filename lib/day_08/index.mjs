

const makeGraph = (input) => {
  const regExp = /([A-Z0-9]{3}) = \(([A-Z0-9]{3}), ([A-Z0-9]{3})\)/;
  return input.reduce((result, line) => {
    const [_, node, L, R] = regExp.exec(line);
    return { ...result, [node]: { L, R } }
  }, {});
}

const findNrOfSteps = (graph, directions, start, endFn) => {
  let currentNode = start;
  let cursor = 0;
  let nrOfSteps = 0;

  while (!endFn(currentNode)) {
    const direction = directions[cursor];
    const nextNode = graph[currentNode][direction];

    currentNode = nextNode;
    cursor = (cursor + 1) % directions.length;
    nrOfSteps++;
  }

  return nrOfSteps;
}

export function task1(input) {
  const directions = input[0].split("");
  const graph = makeGraph(input.slice(1));

  return findNrOfSteps(graph, directions, "AAA", node => node === "ZZZ");
}

const gcd = (a, b) => {
  if (b == 0)
    return a;
  return gcd(b, a % b);
}

const lcm = (a, b) => {
  return (a / gcd(a, b)) * b;
}

export function task2(input) {
  const directions = input[0].split("");
  const graph = makeGraph(input.slice(1));

  let routes = Object.keys(graph).filter(node => node.endsWith("A"));
  const depths = routes.map((start) => findNrOfSteps(graph, directions, start, node => node.endsWith("Z")));
  const sum = depths.reduce((sum, depth) => lcm(sum, depth), depths.shift());

  return sum;
}
