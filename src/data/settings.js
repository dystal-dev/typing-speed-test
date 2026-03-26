export const settingsList = [
  {
    id: "difficulty",
    options: [
      {
        id: "easy",
        label: "Easy",
      },
      {
        id: "medium",
        label: "Medium",
      },
      {
        id: "hard",
        label: "Hard",
      },
    ],
    default: 0,
  },
  {
    id: "mode",
    options: [
      {
        id: "timed_60",
        label: "Timed (60s)",
        type: "timed",
        startTime: 60,
      },
      {
        id: "passage",
        label: "Passage",
        type: "passage",
      },
    ],
    default: 0,
  },
];
