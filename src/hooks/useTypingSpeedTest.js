import { useState, useEffect } from "react";

// WPM = (characters_typed / 5) * (60 / time_in_seconds)
// AWPM = WPM x Accuracy (rounded down)
// Accuracy = (correct_characters_typed / total_characters_typed) * 100

export function useTypingSpeedTest(
  passage,
  testStarted,
  setTestStarted,
  finished,
  setFinished,
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

  // HELPERS
  function processUserInput(inputValue) {
    const inputArray = inputValue.split("");
    const updatedPassageArray = passageCharArray.map((item, i) => ({
      ...item,
      isCorrect: i < inputArray.length ? inputArray[i] === item.char : null,
    }));
    setPassageCharArray(updatedPassageArray);

    if (inputValue.length > userInput.length) {
      const i = inputValue.length - 1;

      if (inputValue[i] !== passageCharArray[i]?.char) {
        setErrorsMade((prev) => prev + 1);
      }
    }
  }

  // STATES
  const [userInput, setUserInput] = useState("");
  const [passageCharArray, setPassageCharArray] = useState(
    createPassageCharArray(passage),
  );
  const [errorsMade, setErrorsMade] = useState(0);

  // EVENT HANDLERS
  function handleUserInputChange(event) {
    const newInputvalue = event.target.value;

    setUserInput(newInputvalue);
    processUserInput(newInputvalue);

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
    setStats({ wpm: 0, accuracy: 0, time: 0 });
    setErrorsMade(0);
  }, [passage]);

  // accuracy calculator
  useEffect(() => {
    const correctCount = passageCharArray.filter(
      (c) => c.isCorrect === true,
    ).length;

    const accuracy =
      correctCount === 0 && errorsMade === 0
        ? 100
        : (correctCount / (correctCount + errorsMade)) * 100;

    setStats((prev) => ({
      ...prev,
      accuracy,
    }));
  }, [passageCharArray, errorsMade]);

  // timer
  useEffect(() => {
    if (!testStarted || finished) return;

    const intervalId = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        time: prev.time + 1,
      }));
    }, 1_000);

    return () => clearInterval(intervalId);
  }, [testStarted, finished]);

  return {
    testStarted,
    setTestStarted,
    userInput,
    passageCharArray,
    handleUserInputChange,
  };
}
