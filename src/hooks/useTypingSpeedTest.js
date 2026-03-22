import { useState, useEffect } from "react";

export function useTypingSpeedTest(
  passage,
  testStarted,
  setTestStarted,
  finished,
  setFinished,
  stats,
  setStats,
) {
  // UTILITY FUNCTIONS
  const createPassageCharArray = (passage) => {
    return passage.split("").map((char, index) => ({
      char,
      index,
      isCorrect: null,
    }));
  };

  function checkTypingAccuracy(inputValue) {
    const inputArray = inputValue.split("");
    const updatedArray = passageCharArray.map((item, i) => ({
      ...item,
      isCorrect: i < inputArray.length ? inputArray[i] === item.char : null,
    }));

    setPassageCharArray(updatedArray);
  }

  // STATES
  const [userInput, setUserInput] = useState("");
  const [passageCharArray, setPassageCharArray] = useState(
    createPassageCharArray(passage),
  );

  // EVENT HANDLERS
  function handleUserInputChange(event) {
    const newInputvalue = event.target.value;

    setUserInput(newInputvalue);
    checkTypingAccuracy(newInputvalue);

    if (newInputvalue.length >= passage.length) {
      setFinished(true);
      setTestStarted(false);
    }

    if (!testStarted) {
      setTestStarted(true);
    }
  }

  // EFFECTS
  // reset test when passage changes
  useEffect(() => {
    setUserInput("");
    setPassageCharArray(createPassageCharArray(passage));
    setTestStarted(false);
  }, [passage]);

  // timer
  useEffect(() => {
    if (!testStarted || finished)
      return setStats((prev) => ({ ...prev, time: 0 }));

    const intervalId = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        time: prev.time + 1,
      }));
    }, 1_000);

    return () => clearInterval(intervalId);
  }, [testStarted, finished]);

  // RETURN
  return {
    testStarted,
    setTestStarted,
    userInput,
    passageCharArray,
    handleUserInputChange,
  };
}
