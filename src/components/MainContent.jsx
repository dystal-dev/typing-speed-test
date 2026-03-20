import { useState } from "react";
import StatsRow from "./StatsRow";
import SettingsRow from "./SettingsRow";
import TextBox from "./TextBox";
import { settingsList } from "../data/settings";

export default function MainContent() {
  const defaultDifficulty = settingsList.find(
    (setting) => setting.id === "difficulty",
  )?.default;

  const [difficulty, setDifficulty] = useState(defaultDifficulty);

  return (
    <div className="grid gap-8">
      <div className="pb-200 border-b-1 border-neutral-700 gap-250 flex flex-col xl:flex-row xl:items-center justify-between">
        <StatsRow />
        <SettingsRow setDifficulty={setDifficulty} />
      </div>
      <TextBox difficulty={difficulty} />
    </div>
  );
}
