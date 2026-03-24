import React from "react";
import Button from "./ui/Button.jsx";

export default function Results({ resetTest, getNewPassage, setFinished }) {
  return (
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
  );
}
