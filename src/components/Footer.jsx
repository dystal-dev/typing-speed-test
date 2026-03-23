import React from "react";
import Button from "./ui/Button.jsx";
export default function Footer({ testStarted, resetTest }) {
  return (
    <div className="mx-auto">
      {testStarted && (
        <Button variant="secondary-muted" onClick={resetTest}>
          Restart Test
        </Button>
      )}
    </div>
  );
}
