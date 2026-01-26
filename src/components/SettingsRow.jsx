import Setting from "./ui/Setting";
import { settingsList } from "../data/settings";

export default function SettingsRow() {
  return (
    <>
      <div className="flex divide-x divide-neutral-700">
        {settingsList.map((setting) => (
          <Setting
            key={setting.label}
            label={setting.label}
            options={setting.options}
            isActive={setting.isActive}
          />
        ))}
      </div>
    </>
  );
}
