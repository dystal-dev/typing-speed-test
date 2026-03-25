import React from "react";
import Button from "./ui/Button.jsx";

export default function Results({ resetTest, getNewPassage, setFinished }) {
  return (
    <div className="flex flex-col pt-300 gap-400">
      <di className="flex flex-col items-center pt-300 gap-125">
        <h1 className="text-preset-1">Test Complete!</h1>
        <h2 className="text-preset-3 text-neutral-400">
          Solid run. Keep pushing to beat your high score.
        </h2>
      </di>
      <div className="flex flex-row justify-center pt-250 pb-400 gap-250">
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
      <div className="flex justify-center">
        <Button
          variant="secondary"
          onClick={() => {
            resetTest();
            getNewPassage();
            setFinished(false);
          }}
        >
          Go Again
        </Button>
      </div>
    </div>
  );
}
