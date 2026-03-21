import { useState } from "react";
import StatsRow from "./StatsRow";
import SettingsRow from "./SettingsRow";
import TextBox from "./TextBox";
import Results from "./Results";
import { settingsList } from "../data/settings";

export default function MainContent({ testStarted, setTestStarted }) {
  const defaultDifficulty = settingsList.find(
    (setting) => setting.id === "difficulty",
  )?.default;

  const [difficulty, setDifficulty] = useState(defaultDifficulty);
  const [finished, setFinished] = useState(false);

  return (
    <div className="grid gap-8">
      <div className="pb-200 border-b-1 border-neutral-700 gap-250 flex flex-col xl:flex-row xl:items-center justify-between">
        <StatsRow />
        <SettingsRow setDifficulty={setDifficulty} />
      </div>
      {!finished && (
        <TextBox
          testStarted={testStarted}
          setTestStarted={setTestStarted}
          difficulty={difficulty}
          finished={finished}
          setFinished={setFinished}
        />
      )}
      {finished && <Results setFinished={setFinished} />}
    </div>
  );
}
