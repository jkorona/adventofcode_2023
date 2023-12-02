export function task1(input) {
  const pattern = /Game (\d+): (.*)/;

  const possibleGames = input
    .filter(Boolean)
    .map(line => {
      const [_, gameNumber, games] = pattern.exec(line);

      const possible = games.split(";")
        .every(set => {
          const { red, green, blue } = set
            .match(/(\d+) (?:red|green|blue)/g)
            .reduce((result, match) => {
              const [_, count, color] = /(\d+) (\w+)/.exec(match);
              result[color] += parseInt(count);
              return result;
            }, { red: 0, green: 0, blue: 0 });
            return red <= 12 && green <= 13 && blue <= 14;
          });


      return {
        gameNumber,
        possible,
      }
    })
    .filter(game => game.possible)
    .map(game => parseInt(game.gameNumber));

  return possibleGames.reduce((result, game) => result + game, 0);
}
