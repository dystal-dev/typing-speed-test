import React from "react";
import StatsRow from "./StatsRow";
import SettingsContainer from "./SettingsContainer";

export default function StatsContainer() {
  return (
    <div className="pb-200 border-b-1 flex justify-between items-center">
      <StatsRow />
      <SettingsContainer />
    </div>
  );
}
