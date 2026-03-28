import { useState, useEffect } from "react";
import IconDownArrow from "../../assets/images/icon-down-arrow.svg";
import Dropdown from "./Dropdown.jsx";

export default function SettingDropdown({
  label,
  options,
  activeId,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const activeOptionLabel = options.find(
    (option) => option.id === activeId,
  )?.label;

  useEffect(() => {
    function handleClickOutside(mouseEvent) {
      if (!mouseEvent.target.closest(".dropdown-root")) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative flex w-full dropdown-root">
      <button
        className="relative flex w-full px-125 py-75 gap-125 rounded-8 border-1 border-neutral-500 cursor-pointer justify-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {activeOptionLabel || label}
        <img src={IconDownArrow} alt="Down Arrow" className="w-150" />
      </button>
      {isOpen && (
        <ul className="absolute z-20 mt-600 w-full bg-neutral-800 rounded-8 divide-neutral-700 divide-y-1">
          {options.map((option) => (
            <Dropdown
              key={option.id}
              option={option}
              activeId={activeId}
              onChange={onChange}
              setIsOpen={setIsOpen}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
