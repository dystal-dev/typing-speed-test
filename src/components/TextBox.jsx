import React from "react";
import getRandomPassage from "../utils/passages.js";
import { useTypingSpeedTest } from "../hooks/useTypingSpeedTest.js";

export default function TextBox() {
  const passage = getRandomPassage("hard").text;
  const { userInput, passageCharArray, handleUserInputChange } =
    useTypingSpeedTest(passage);

  const firstNullIndex = passageCharArray.findIndex(
    (c) => c.isCorrect === null,
  );

  function getCharClass(character, currentIndex) {
    if (character.index === currentIndex) return "bg-neutral-0/25 rounded-4";
    if (character.isCorrect === null) return "text-gray-400";
    if (character.isCorrect) return "text-green-500";
    return "text-red-500 underline";
  }

  return (
    <div className="relative">
      <div className="w-full text-preset-1-regular text-neutral-400 whitespace-pre-wrap">
        {passageCharArray.map((character) => (
          <span
            key={character.index}
            className={getCharClass(character, firstNullIndex)}
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
