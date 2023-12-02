const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

export function task1(input) {
  const values = input.map((line) => {
    let first = -1, last = -1, index = 0;
    while (!(first >= 0 && last >= 0) || index < line.length) {
      if (first < 0) {
        const char = line[index];
        if (numbers.includes(char)) {
          first = char;
        }
      }
      if (last < 0) {
        const char = line[line.length - index - 1];
        if (numbers.includes(char)) {
          last = char;
        }
      }
      index++;
    }
    return parseInt(first + last, 10);
  });

  return values.reduce((sum, number) => sum + number, 0);
}

const numberMap = {
  "zero": "0",
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
};

export function task2(input) {
  const pattern = /(?:\d|zero|one|two|three|four|five|six|seven|eight|nine)/gi

  const values = input.map((line) => {
    const numbers = line.match(pattern);

    const first = numberMap[numbers[0]] || numbers[0];
    const last = numberMap[numbers[numbers.length - 1]] || numbers[numbers.length - 1];

    return parseInt(first + last, 10);
  });

  return values.reduce((sum, number) => sum + number, 0)
}
