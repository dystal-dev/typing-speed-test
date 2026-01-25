import React from "react";
import { settingsList } from "../data/settings";

export default function SettingsRow() {
  return (
    <>
      <div className="flex divide-x divide-neutral-700">
        {settingsList.map((setting) => (
          <ul
            key={setting.label}
            className="text-preset-5 text-neutral-400 gap-150 flex items-center px-300 last:pr-0 first:pl-0"
          >
            {setting.label}:
            {setting.options.map((option) => (
              <li key={option}>
                <button className="btn cursor-pointer text-preset-5 text-neutral-0 px-125 py-75 rounded-8 border-1 border-neutral-500">
                  {option}
                </button>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
}
