import React from "react";
import Button from "./ui/Button.jsx";
import { useTypingSpeedTest } from "../hooks/useTypingSpeedTest.js";

export default function Footer({ testStarted }) {
  return (
    <div className="mx-auto">
      {testStarted && <Button variant="secondary-muted">Restart Test</Button>}
    </div>
  );
}
