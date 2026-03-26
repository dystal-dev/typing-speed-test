import React from "react";
import Button from "./ui/Button.jsx";
import IconRestart from "../assets/images/icon-restart.svg";

export default function Footer({ status, onRestart }) {
  return (
    <>
      {status === "active" && (
        <div className="flex justify-center border-t-1 border-neutral-700">
          <Button
            className="mt-400"
            variant="secondary-muted"
            onClick={onRestart}
          >
            Restart Test
            <img src={IconRestart} alt="restart" />
          </Button>
        </div>
      )}
    </>
  );
}
