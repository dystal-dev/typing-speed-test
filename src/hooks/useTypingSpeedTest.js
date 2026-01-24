import { useState } from "react";

export function useTypingSpeedTest(passage) {
  const [userInput, setUserInput] = useState("");
  const [passageCharArray, setPassageCharArray] = useState(
    passage.split("").map((char, index) => ({
      char,
      index,
      isCorrect: null,
    })),
  );

  function handleUserInputChange(event) {
    const newInputvalue = event.target.value;

    setUserInput(newInputvalue);
    checkTypingAccuracy(newInputvalue);
  }

  function checkTypingAccuracy(inputValue) {
    const inputArray = inputValue.split("");
    const updatedArray = passageCharArray.map((item, i) => ({
      ...item,
      isCorrect: i < inputArray.length ? inputArray[i] === item.char : null,
    }));

    setPassageCharArray(updatedArray);
  }

  return { userInput, passageCharArray, handleUserInputChange };
}
