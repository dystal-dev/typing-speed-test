export default function Stat({ label, value, color }) {
  return (
    <div className="text-preset-3 text-neutral-400 gap-150 flex pr-300">
      {label}:<div className={`text-preset-2 ${color}`}>{value}</div>
    </div>
  );
}
