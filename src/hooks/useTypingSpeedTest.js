import { useState, useEffect } from "react";

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

  // WPM formula = (characters_typed / 5) * (60 / time_in_seconds)
  // AWPM = WPM x Accuracy (rounded down)

  // Accuracy formula = (correct_characters_typed / total_characters_typed) * 100
  function checkTypingAccuracy(inputValue) {
    let newErrorsMade = errorsMade;
    const inputArray = inputValue.split("");
    const updatedPassageArray = passageCharArray.map((item, i) => ({
      ...item,
      isCorrect: i < inputArray.length ? inputArray[i] === item.char : null,
    }));
    setPassageCharArray(updatedPassageArray);

    if (inputValue.length > userInput.length) {
      const latestChar = inputArray[inputArray.length - 1];
      const expectedChar = passageCharArray[inputArray.length - 1]?.char;
      const wasCorrect = latestChar === expectedChar;

      if (!wasCorrect) {
        setErrorsMade((prev) => prev + 1);
        newErrorsMade = errorsMade + 1;
      }
    }

    const correctCount = updatedPassageArray.filter(
      (c) => c.isCorrect === true,
    ).length;
    const accuracy = (correctCount / (correctCount + newErrorsMade)) * 100;

    setStats((prev) => ({
      ...prev,
      accuracy: accuracy,
    }));
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
    setStats({ wpm: 0, accuracy: 0, time: 0 });
    setErrorsMade(0);
  }, [passage]);

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

  // RETURN
  return {
    testStarted,
    setTestStarted,
    userInput,
    passageCharArray,
    handleUserInputChange,
  };
}
