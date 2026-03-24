import data from "../data/passages.json" with { type: "json" };

export default function getRandomPassage(difficulty) {
  const generateRandomNumber = (arg) => {
    const randomNum = Math.floor(Math.random() * arg);
    return randomNum;
  };

  const passage = data[difficulty.id];
  const selectedPassage = passage[generateRandomNumber(passage.length)];
  return selectedPassage;
}
