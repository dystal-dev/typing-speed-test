import Button from "./Button.jsx";
import { useState } from "react";

export default function Settings({ label, options, defaultOption, onChange }) {
  const [active, setActive] = useState(defaultOption);

  const handleClick = (option, index) => {
    setActive(index);
    if (onChange) onChange(option);
  };

  return (
    <ul
      key={label}
      className="text-preset-5 text-neutral-400 gap-75 flex items-center px-200 last:pr-0 first:pl-0"
    >
      <span className="pr-75 capitalize">{label}:</span>
      {options.map((option, index) => (
        <li key={option.id}>
          <Button
            variant="settings"
            className={
              active === index ? "!text-blue-400 !border-blue-400" : ""
            }
            onClick={() => handleClick(option, index)}
          >
            {option.label}
          </Button>
        </li>
      ))}
    </ul>
  );
}
