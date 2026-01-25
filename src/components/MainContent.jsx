import React from "react";
import StatsRow from "./StatsRow";
import SettingsRow from "./SettingsRow";
import TextBox from "./TextBox";

export default function MainContent() {
  return (
    <div className="grid gap-8">
      <div className="pb-200 border-b-1 border-neutral-700 gap-250 flex flex-col xl:flex-row xl:items-center justify-between">
        <StatsRow />
        <SettingsRow />
      </div>
      <TextBox />
    </div>
  );
}
