import React from "react";
import Button from "./ui/Button.jsx";
import IconRestart from "../assets/images/icon-restart.svg";

export default function Footer({ status, onRestart }) {
  return (
    <div className="mx-auto">
      {status === "active" && (
        <Button variant="secondary-muted" onClick={onRestart}>
          Restart Test
          <img src={IconRestart} alt="restart" />
        </Button>
      )}
    </div>
  );
}
