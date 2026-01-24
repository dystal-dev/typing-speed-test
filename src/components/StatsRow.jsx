import Stat from "./ui/Stat";
import { statList } from "../data/stats";
import { useState } from "react";

export default function StatsRow() {
  const [values, setValues] = useState({
    WPM: 0,
    Accuracy: 0,
    Time: "00:00",
  });

  return (
    <div className="flex gap-300 divide-x divide-neutral-700">
      {statList.map((stat) => (
        <Stat
          key={stat.label}
          label={stat.label}
          color={stat.color}
          value={values[stat.label]}
        />
      ))}
    </div>
  );
}
