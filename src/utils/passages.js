import passages from "../data/data.json" with { type: "json" };

function generateRandomNumber(arg) {
  const randomNum = Math.floor(Math.random() * arg);
  return randomNum;
}

export function getRandomPassage(difficulty) {
  const passage = passages[difficulty];
  const selectedPassage = passage[generateRandomNumber(passage.length)];
  return selectedPassage;
}
