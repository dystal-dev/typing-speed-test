export default function Stat({ label, stats, color }) {
  return (
    <div className="text-preset-3 text-neutral-400 gap-150 flex items-center px-300 last:pr-0 first:pl-0">
      {label}:<div className={`text-preset-2 ${color}`}>{stats}</div>
    </div>
  );
}
