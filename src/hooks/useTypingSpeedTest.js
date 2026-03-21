import { useState, useEffect } from "react";

export function useTypingSpeedTest(passage, testStarted, setTestStarted) {
  const createPassageCharArray = (passage) => {
    return passage.split("").map((char, index) => ({
      char,
      index,
      isCorrect: null,
    }));
  };

  const [userInput, setUserInput] = useState("");
  const [passageCharArray, setPassageCharArray] = useState(
    createPassageCharArray(passage),
  );

  useEffect(() => {
    setUserInput("");
    setPassageCharArray(createPassageCharArray(passage));
    setTestStarted(false);
  }, [passage]);

  function handleUserInputChange(event) {
    const newInputvalue = event.target.value;

    setUserInput(newInputvalue);
    checkTypingAccuracy(newInputvalue);

    if (!testStarted) {
      setTestStarted(true);
    }
  }

  function checkTypingAccuracy(inputValue) {
    const inputArray = inputValue.split("");
    const updatedArray = passageCharArray.map((item, i) => ({
      ...item,
      isCorrect: i < inputArray.length ? inputArray[i] === item.char : null,
    }));

    setPassageCharArray(updatedArray);
  }

  return {
    testStarted,
    setTestStarted,
    userInput,
    passageCharArray,
    handleUserInputChange,
  };
}
