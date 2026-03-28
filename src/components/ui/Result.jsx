export default function Result({ label, result }) {
  return (
    <div className="flex flex-col py-200 px-300 gap-150 rounded-8 sm:w-[160px] border border-neutral-700">
      <div className="text-preset-3 text-neutral-400">{label}</div>
      <div className="text-preset-2 text-neutral-0">{result}</div>
    </div>
  );
}
