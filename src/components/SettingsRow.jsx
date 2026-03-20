import Setting from "./ui/Setting";
import { settingsList } from "../data/settings";

export default function SettingsRow({ setDifficulty }) {
  const changeDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };

  const changeMode = (mode) => {
    // do something
  };

  const handlers = {
    difficulty: changeDifficulty,
    mode: changeMode,
  };

  return (
    <>
      <div className="flex divide-x divide-neutral-700">
        {settingsList.map((setting) => (
          <Setting
            key={setting.id}
            label={setting.id}
            options={setting.options}
            onChange={handlers[setting.id]}
          />
        ))}
      </div>
    </>
  );
}
