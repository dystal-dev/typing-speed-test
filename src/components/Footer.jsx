import React from "react";
import Button from "./ui/Button.jsx";
export default function Footer({ status, onReset }) {
  return (
    <div className="mx-auto">
      {status === "active" && (
        <Button variant="secondary-muted" onClick={onReset}>
          Restart Test
        </Button>
      )}
    </div>
  );
}
