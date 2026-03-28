import SettingButtons from "./ui/SettingButtons";
import SettingDropdown from "./ui/SettingDropdown";
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
      <div className="hidden sm:flex divide-x divide-neutral-700">
        {settingsList.map((setting) => (
          <SettingButtons
            key={setting.id}
            label={setting.id}
            options={setting.options}
            activeId={setting.id === "mode" ? mode.id : difficulty.id}
            onChange={handlers[setting.id]}
          />
        ))}
      </div>
      <div className="flex sm:hidden gap-125">
        {settingsList.map((setting) => (
          <SettingDropdown
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
