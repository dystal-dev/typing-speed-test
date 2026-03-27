import React from "react";
import Logo from "./ui/Logo";
import PersonalBest from "./PersonalBest";

export default function Header({ highScore }) {
  return (
    <div className="w-full flex justify-between items-center">
      <Logo />
      <PersonalBest highScore={highScore} />
    </div>
  );
}
