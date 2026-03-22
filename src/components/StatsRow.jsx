import Stat from "./ui/Stat";
import { statList } from "../data/stats";
import formatTime from "../utils/formatTime.js";

export default function StatsRow({ stats }) {
  function getStatValue(statId) {
    if (statId === "time") {
      return formatTime(stats.time);
    }
    return stats[statId];
  }

  return (
    <div className="flex divide-x divide-neutral-700">
      {statList.map((stat) => (
        <Stat
          key={stat.id}
          label={stat.label}
          color={stat.color}
          stats={getStatValue(stat.id)}
        />
      ))}
    </div>
  );
}
