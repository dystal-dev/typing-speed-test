import React from "react";
import TextBox from "./TextBox";

export default function TextContainer() {
  return (
    <div>
      <div className="text-preset-3">
        Start Typing Test Or click the text and start typing
      </div>
      <TextBox />
      <div>
        Test Complete! Solid run. Keep pushing to beat your high score. WPM:
        Accuracy: Characters: Go Again
      </div>
    </div>
  );
}
