import React from "react";
import Button from "./ui/Button.jsx";

export default function Results({ setFinished }) {
  return (
    <div className="flex justify-center">
      <Button variant="secondary" onClick={() => setFinished(false)}>
        Go Again
      </Button>
    </div>
  );
}
