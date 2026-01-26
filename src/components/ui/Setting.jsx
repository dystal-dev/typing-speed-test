export default function Settings({ label, options, isActive }) {
  return (
    <ul
      key={label}
      className="text-preset-5 text-neutral-400 gap-75 flex items-center px-200 last:pr-0 first:pl-0"
    >
      <span className="pr-75">{label}:</span>
      {options.map((option) => (
        <li key={option}>
          <button className="btn cursor-pointer text-preset-5 text-neutral-0 px-125 py-75 rounded-8 border-1 border-neutral-500">
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
