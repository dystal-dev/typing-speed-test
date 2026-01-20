import React from "react";
import Logo from "./Logo";
import PersonalBest from "./PersonalBest";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center">
      <Logo />
      <PersonalBest />
    </div>
  );
}
