import Setting from "./ui/Setting";
import { settingsList } from "../data/settings";

export default function SettingsRow({
  mode,
  difficulty,
  onDifficultyChange,
  onModeChange,
}) {
  const changeDifficulty = (difficulty) => {
    onDifficultyChange(difficulty);
  };

  const changeMode = (mode) => {
    onModeChange(mode);
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
            activeId={setting.id === "mode" ? mode.id : difficulty.id}
            onChange={handlers[setting.id]}
          />
        ))}
      </div>
    </>
  );
}
