import Button from "./Button.jsx";
import { useState } from "react";

export default function Settings({ label, options, onChange }) {
  const [active, setActive] = useState(options[0] || "");

  const handleClick = (option) => {
    setActive(option);
    if (onChange) onChange(option);
  };

  return (
    <ul
      key={label}
      className="text-preset-5 text-neutral-400 gap-75 flex items-center px-200 last:pr-0 first:pl-0"
    >
      <span className="pr-75 capitalize">{label}:</span>
      {options.map((option) => (
        <li key={option}>
          <Button
            variant="settings"
            className={
              active === option ? "!text-blue-400 !border-blue-400" : ""
            }
            onClick={() => handleClick(option)}
          >
            {option}
          </Button>
        </li>
      ))}
    </ul>
  );
}
