

const makeGraph = (input) => {
  const regExp = /([A-Z0-9]{3}) = \(([A-Z0-9]{3}), ([A-Z0-9]{3})\)/;
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

export function task2(input) {
  const directions = input.shift().split("");
  const graph = makeGraph(input);

  let routes = Object.keys(graph).filter(node => node.endsWith("A"));
  let cursor = 0;
  let nrOfSteps = 0;

  while(!routes.every(route => route.endsWith("Z"))) {
    const direction = directions[cursor];
    
    routes = routes.map(current => graph[current][direction]);

    cursor = (cursor + 1) % directions.length;
    nrOfSteps++;
  }

  return nrOfSteps;
}
