import { useState, useEffect } from "react";
import { settingsList } from "../data/settings";
import getRandomPassage from "../utils/passages.js";

export function test() {
  // HELPERS
  function getNewPassage() {
    const newPassage = getRandomPassage(difficulty).text;
    setPassage(newPassage);
  }

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
        setErrorCount((prev) => prev + 1);
      } else {
        setCorrectCount((prev) => prev + 1);
      }
    }
  }

  function resetTest() {
    setUserInput("");
    setStats({ wpm: 0, accuracy: 0, time: 0 });
    setPreviousPassagesLength(0);
    setErrorCount(0);
    setCorrectCount(0);
    setPassageCharArray(createPassageCharArray(passage));
  }

  // UTILITY FUNCTIONS
  const createPassageCharArray = (passage) => {
    return passage.split("").map((char, index) => ({
      char,
      index,
      isCorrect: null,
    }));
  };

  // STATES
  const [passage, setPassage] = useState("");
  const [passageCharArray, setPassageCharArray] = useState(
    createPassageCharArray(passage),
  );
  const [testStarted, setTestStarted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [previousPassagesLength, setPreviousPassagesLength] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [stats, setStats] = useState({
    wpm: 0,
    accuracy: 0,
    time: 0,
  });
  const [finished, setFinished] = useState(false);
  const modeSettings = settingsList.find((setting) => setting.id === "mode");
  const defaultMode = modeSettings?.options[modeSettings.default];
  const [mode, setMode] = useState(defaultMode);
  const difficultySettings = settingsList.find(
    (setting) => setting.id === "difficulty",
  );
  const defaultDifficulty =
    difficultySettings?.options[difficultySettings.default];
  const [difficulty, setDifficulty] = useState(defaultDifficulty);

  // EVENT HANDLERS
  function handleUserInputChange(event) {
    const newInputValue = event.target.value;

    setUserInput(newInputValue);
    processUserInput(newInputValue);

    if (newInputValue.length >= passage.length) {
      if (mode.type === "passage") {
        setFinished(true);
        setTestStarted(false);
      } else if (mode.type === "timed") {
        getNewPassage();
        setUserInput("");
        setPreviousPassagesLength((prev) => prev + passage.length);
      }
    }

    if (!testStarted) {
      setTestStarted(true);
    }
  }

  useEffect(() => {
    console.log({
      passage,
      testStarted,
      previousPassagesLength,
      errorCount,
      correctCount,
      ...stats,
      finished,
      mode,
      difficulty,
    });
  }, [userInput]);

  // EFFECTS
  useEffect(() => {
    setPassageCharArray(createPassageCharArray(passage));
  }, [passage]);

  useEffect(() => {
    getNewPassage();
  }, [difficulty]);

  useEffect(() => {
    if (mode.type === "passage") {
      resetTest();
      setTestStarted(false);
    } else if (mode.type === "timed" && !testStarted) {
      resetTest();
    }
  }, [passage]);

  useEffect(() => {
    const accuracy =
      correctCount === 0 && errorCount === 0
        ? 100
        : (correctCount / (correctCount + errorCount)) * 100;

    const wpm =
      stats.time === 0
        ? 0
        : Math.floor(
            ((previousPassagesLength + userInput.length) / 5) *
              (60 / stats.time) *
              (accuracy / 100),
          );

    setStats((prev) => ({
      ...prev,
      wpm,
      accuracy,
    }));
  }, [stats.time, passageCharArray, errorCount]);

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

  useEffect(() => {
    if (stats.time >= mode.startTime) {
      setFinished(true);
      setTestStarted(false);
    }
  }, [stats.time]);

  return {
    getNewPassage,
    testStarted,
    setTestStarted,
    userInput,
    passageCharArray,
    handleUserInputChange,
    stats,
    setPassage,
    finished,
    setFinished,
    resetTest,
    mode,
    setMode,
    difficulty,
    setDifficulty,
  };
}
