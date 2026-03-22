import { useState, useEffect, useRef } from "react";
import getRandomPassage from "../utils/passages.js";
import { useTypingSpeedTest } from "../hooks/useTypingSpeedTest.js";
import Button from "./ui/Button.jsx";

function getCharClass(character, currentIndex) {
  if (character.index === currentIndex) return "bg-neutral-0/25 rounded-4";
  if (character.isCorrect === null) return "text-gray-400";
  if (character.isCorrect) return "text-green-500";
  return "text-red-500 underline";
}

export default function TextBox({
  testStarted,
  setTestStarted,
  difficulty,
  finished,
  setFinished,
  setStats,
}) {
  const textareaRef = useRef(null);
  const [passage, setPassage] = useState("");

  // HOOK
  const { userInput, passageCharArray, handleUserInputChange } =
    useTypingSpeedTest(
      passage,
      testStarted,
      setTestStarted,
      finished,
      setFinished,
      setStats,
    );

  // find the current cursor position (first untyped character)
  const firstNullIndex = passageCharArray.findIndex(
    (c) => c.isCorrect === null,
  );

  // EFFECTS
  useEffect(() => {
    const newPassage = getRandomPassage(difficulty).text;
    setPassage(newPassage);
  }, [difficulty]);

  useEffect(() => {
    if (testStarted) {
      textareaRef.current.focus();
    }
  }, [testStarted]);

  return (
    <div className="relative">
      {!testStarted && (
        <div className="absolute -inset-8 z-10 flex pointer-events-none backdrop-blur-sm">
          <div className="flex flex-col m-auto h-auto gap-250 items-center pointer-events-auto">
            <Button variant="primary" onClick={() => setTestStarted(true)}>
              Start Typing Test
            </Button>
            <span className="text-preset-3-semiBold">
              Or click the text and start typing
            </span>
          </div>
        </div>
      )}
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
        autoFocus
        className="bg-neutral-600 resize-none absolute inset-0 cursor-default opacity-0"
        spellCheck="false"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        onChange={handleUserInputChange}
        value={userInput}
        ref={textareaRef}
      ></textarea>
    </div>
  );
}
