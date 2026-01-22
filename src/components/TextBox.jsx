import React from "react";
import { useState } from "react";
import getRandomPassage from "../utils/passages.js";

export default function TextBox() {
  const [userInput, setUserInput] = useState("");
  const passage = getRandomPassage("hard").text;

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

  return (
    <div className="relative">
      <div className="w-full text-preset-1-regular text-neutral-400">
        {passageCharArray.map((character) => (
          <span
            key={character.index}
            className={
              character.isCorrect === null
                ? "text-gray-400" // bg-neutral-0/25 rounded-4
                : character.isCorrect
                  ? "text-green-500"
                  : "text-red-500 underline"
            }
          >
            {character.char}
          </span>
        ))}
      </div>
      <textarea
        className="resize-none bg-neutral-600 absolute inset-0 cursor-default resize-none opacity-0"
        spellCheck="false"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        onChange={handleUserInputChange}
        value={userInput}
      ></textarea>
    </div>
  );
}
