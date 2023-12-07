
const calculatePossibleWins = (time, distance) => {
  let pressingTime = time;
  let possibleWins = 0;

  while (pressingTime > 0) {
    const steps = time - pressingTime;
    if (steps * pressingTime > distance) {
      possibleWins++;
    }
    pressingTime--;
  }

  return possibleWins;
};

export function task1(input) {
  const [times, distances] = input.map(line => line.match(/\d+/g).map(Number));
  
  const possibleWins = times.map((time, index) => calculatePossibleWins(time, distances[index]));

  return possibleWins.reduce((prev, next) => prev * next);
}

export function task2(input) {
  const [time, distance] = input.map(line => parseInt(line.match(/\d+/g).join("")));
  
  return calculatePossibleWins(time, distance);
}
