/*
console.log("1", getHandType("AAAAA"));
console.log("2", getHandType("AA8AA"));
console.log("3", getHandType("23332"));
console.log("4", getHandType("TTT98"));
console.log("5", getHandType("23432"));
console.log("6", getHandType("A23A4"));
console.log("7", getHandType("23456"));
*/

const getHandType = (hand) => {
  const map = hand.split('').reduce((map, card) => {
    map[card] = map[card] ? map[card] + 1 : 1;
    return map;
  }, {});
  return Object.values(map).reduce((result, value) => Math.pow(3, value) + result, 0);
}

const cardValue = (card, jValue) => {
  switch (card) {
    case 'A': return 14;
    case 'K': return 13;
    case 'Q': return 12;
    case 'J': return jValue;
    case 'T': return 10;
    default: return parseInt(card);
  }
}

const compareHands = (hand1, hand2, jValue = 11) => {
  for (let i = 0; i < 5; i++) {
    const value1 = cardValue(hand1[i], jValue);
    const value2 = cardValue(hand2[i], jValue);
    if (value1 > value2) {
      return 1;
    } else if (value1 < value2) {
      return -1;
    }
  }
  return 0;
}

export function task1(input) {
  return input
    .map((line) => {
      const [hand, bid] = line.split(" ");
      const handType = getHandType(hand);

      return { hand, bid: parseInt(bid), handType };
    })
    .sort((a, b) => {
      if (a.handType === b.handType) {
        return compareHands(a.hand, b.hand);
      }
      return a.handType - b.handType;
    })
    .reduce((result, handInfo, index) => {
      return result + (handInfo.bid * (index + 1));
    }, 0);
}

const getHandTypeWithJoker = (hand) => {
  const map = hand.split('').reduce((map, card) => {
    map[card] = map[card] ? map[card] + 1 : 1;
    return map;
  }, {});

  const jokers = map['J'] || 0;
  if (jokers > 0 && jokers < 5) {
    delete map['J'];
    const maxCard = Object.entries(map)
      .reduce((result, entry) => {
        return entry[1] > result[1] ? entry : result
      })[0];
    map[maxCard] += jokers;
  }

  return Object.values(map).reduce((result, value) => Math.pow(3, value) + result, 0);
}

export function task2(input) {
  return input
    .map((line) => {
      const [hand, bid] = line.split(" ");
      const handType = getHandTypeWithJoker(hand);

      return { hand, bid: parseInt(bid), handType };
    })
    .sort((a, b) => {
      if (a.handType === b.handType) {
        return compareHands(a.hand, b.hand, 1);
      }
      return a.handType - b.handType;
    })
    .reduce((result, handInfo, index) => {
      return result + (handInfo.bid * (index + 1));
    }, 0);
}
