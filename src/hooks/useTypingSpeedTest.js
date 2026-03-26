import { useEffect, useReducer, useRef, useMemo } from "react";
import { settingsList } from "../data/settings";
import getRandomPassage from "../utils/passages.js";

const ACTIONS = {
  RESET_TEST: "reset_test",
  DIFFICULTY_CHANGED: "difficulty_changed",
  MODE_CHANGED: "mode_changed",
  USER_TYPED: "user_typed",
  TEST_FINISHED: "test_finished",
  TIMED_PASSAGE_COMPLETED: "timed_passage_completed",
  TIMER_TICKED: "timer_ticked",
  START_TEST: "start_test",
};

function getInitialState(defaultMode, defaultDifficulty) {
  return {
    status: "idle",
    passage: getRandomPassage(defaultDifficulty).text,
    userInput: "",
    previousPassagesLength: 0,
    errorCount: 0,
    correctCount: 0,
    time: 0,
    mode: defaultMode,
    difficulty: defaultDifficulty,
  };
}

function getResetState(state, newPassage) {
  return {
    ...state,
    status: "idle",
    passage: newPassage,
    userInput: "",
    previousPassagesLength: 0,
    errorCount: 0,
    correctCount: 0,
    time: 0,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.RESET_TEST:
      return getResetState(state, action.payload);
    case ACTIONS.DIFFICULTY_CHANGED:
      return getResetState(
        { ...state, difficulty: action.payload.difficulty },
        action.payload.passage,
      );
    case ACTIONS.MODE_CHANGED:
      return getResetState(
        { ...state, mode: action.payload.mode },
        action.payload.passage,
      );
    case ACTIONS.USER_TYPED: {
      const newUserInput = action.payload;
      const isNewCharacter = newUserInput.length > state.userInput.length;
      const isError =
        isNewCharacter &&
        newUserInput[newUserInput.length - 1] !==
          state.passage[newUserInput.length - 1];

      return {
        ...state,
        userInput: action.payload,
        errorCount: isError ? state.errorCount + 1 : state.errorCount,
        correctCount:
          !isError && isNewCharacter
            ? state.correctCount + 1
            : state.correctCount,
        status: state.status === "idle" ? "active" : state.status,
      };
    }
    case ACTIONS.TEST_FINISHED:
      return { ...state, status: "finished" };
    case ACTIONS.TIMED_PASSAGE_COMPLETED:
      return {
        ...state,
        passage: action.payload,
        userInput: "",
        previousPassagesLength:
          state.previousPassagesLength + state.passage.length,
      };
    case ACTIONS.TIMER_TICKED:
      return { ...state, time: state.time + 1 };
    case ACTIONS.START_TEST:
      return { ...state, status: "active" };
    default:
      return state;
  }
}

export function useTypingSpeedTest() {
  const modeSettings = settingsList.find((setting) => setting.id === "mode");
  const defaultMode = modeSettings?.options[modeSettings.default];
  const difficultySettings = settingsList.find(
    (setting) => setting.id === "difficulty",
  );
  const defaultDifficulty =
    difficultySettings?.options[difficultySettings.default];

  const [state, dispatch] = useReducer(
    reducer,
    getInitialState(defaultMode, defaultDifficulty),
  );

  const accuracy = useMemo(() => {
    return state.correctCount === 0 && state.errorCount === 0
      ? 100
      : (state.correctCount / (state.correctCount + state.errorCount)) * 100;
  }, [state.correctCount, state.errorCount]);

  const wpm = useMemo(() => {
    return state.time === 0
      ? 0
      : Math.floor(
          ((state.previousPassagesLength + state.userInput.length) / 5) *
            (60 / state.time) *
            (accuracy / 100),
        );
  }, [state.time, state.userInput, state.previousPassagesLength, accuracy]);

  const passageCharArray = useMemo(() => {
    return state.passage.split("").map((char, index) => ({
      char,
      index,
      isCorrect:
        index < state.userInput.length ? state.userInput[index] === char : null,
    }));
  }, [state.passage, state.userInput]);

  const timeRef = useRef(state.time);

  useEffect(() => {
    timeRef.current = state.time;
  }, [state.time]);

  useEffect(() => {
    if (state.status !== "active") return;

    const intervalId = setInterval(() => {
      const nextTime = timeRef.current + 1;
      dispatch({ type: ACTIONS.TIMER_TICKED });
      if (nextTime >= state.mode.startTime) {
        dispatch({ type: ACTIONS.TEST_FINISHED });
      }
    }, 1_000);

    return () => clearInterval(intervalId);
  }, [state.status]);

  function handleDifficultyChange(difficulty) {
    dispatch({
      type: ACTIONS.DIFFICULTY_CHANGED,
      payload: { difficulty, passage: getRandomPassage(difficulty).text },
    });
  }

  function handleModeChange(mode) {
    dispatch({
      type: ACTIONS.MODE_CHANGED,
      payload: { mode, passage: getRandomPassage(state.difficulty).text },
    });
  }

  function handleUserInputChange(event) {
    const userInput = event.target.value;

    dispatch({
      type: ACTIONS.USER_TYPED,
      payload: userInput,
    });
    if (userInput.length >= state.passage.length) {
      if (state.mode.type === "timed") {
        dispatch({
          type: ACTIONS.TIMED_PASSAGE_COMPLETED,
          payload: getRandomPassage(state.difficulty).text,
        });
      } else if (state.mode.type === "passage") {
        dispatch({ type: ACTIONS.TEST_FINISHED });
      }
    }
  }

  function handleReset() {
    dispatch({
      type: ACTIONS.RESET_TEST,
      payload: getRandomPassage(state.difficulty).text,
    });
  }

  function handleStart() {
    dispatch({
      type: ACTIONS.START_TEST,
    });
  }

  return {
    status: state.status,
    userInput: state.userInput,
    mode: state.mode,
    passageCharArray,
    wpm,
    accuracy,
    time: state.time,
    handleDifficultyChange,
    handleModeChange,
    handleUserInputChange,
    handleReset,
    handleStart,
  };
}
