import IconCompleted from "../assets/images/icon-completed.svg";
import IconNewPB from "../assets/images/icon-new-pb.svg";

export const resultStats = [
  { id: "wpm", label: "WPM" },
  { id: "accuracy", label: "Accuracy" },
  { id: "counts", label: "Characters" },
];

export const resultVariants = {
  default: {
    title: "Test Complete!",
    subtitle: "Solid run. Keep pushing to beat your high score.",
    buttonLabel: "Go Again",
    icon: IconCompleted,
    iconClass:
      "h-800 w-800 rounded-full shadow-green-glow-small sm:shadow-green-glow",
  },
  highScore: {
    title: "High Score Smashed!",
    subtitle: "You’re getting faster. That was incredible typing.",
    buttonLabel: "Beat This Score",
    icon: IconNewPB,
    iconClass: "h-1000 w-1000",
  },
  baseline: {
    title: "Baseline Established!",
    subtitle:
      "You’ve set the bar. Now the real challenge begins—time to beat it.",
    buttonLabel: "Beat This Score",
    icon: IconCompleted,
    iconClass:
      "h-800 w-800 rounded-full shadow-green-glow-small sm:shadow-green-glow",
  },
};
