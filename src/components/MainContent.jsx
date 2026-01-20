import React from "react";
import StatsContainer from "./StatsContainer";
import TextContainer from "./TextContainer";

export default function MainContent() {
  return (
    <div className="grid gap-8">
      <StatsContainer />
      <TextContainer />
    </div>
  );
}
