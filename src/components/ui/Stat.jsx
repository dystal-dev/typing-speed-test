export default function Stat({ label, stats, color }) {
  return (
    <div
      className="
        text-preset-3-mobile sm:text-preset-3 text-neutral-400 
        items-center text-center
        gap-100 sm:gap-150 
        flex flex-col basis-0 flex-1 sm:flex-row sm:flex-none sm:basis-auto
        px-250 sm:px-300 last:pr-0 first:pl-0
      "
    >
      {label}: <div className={`text-preset-2 ${color}`}>{stats}</div>
    </div>
  );
}
