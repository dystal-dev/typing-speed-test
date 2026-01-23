import React from "react";
import getRandomPassage from "../utils/passages.js";
import { useTypingSpeedTest } from "../hooks/useTypingSpeedTest.js";

export default function TextBox() {
  const passage = getRandomPassage("hard").text;
  const { userInput, passageCharArray, handleUserInputChange } =
    useTypingSpeedTest(passage);

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
