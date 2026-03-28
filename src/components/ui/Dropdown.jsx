export default function Dropdown({ option, activeId, onChange, setIsOpen }) {
  return (
    <label className="flex items-center gap-150 px-125 pt-125 pb-100 cursor-pointer">
      <input
        type="radio"
        name="setting"
        className="sr-only"
        value={option.id}
        checked={activeId === option.id}
        onChange={() => {
          onChange(option);
          setIsOpen(false);
        }}
      />
      <div
        className={`h-200 w-200 rounded-full border-1 flex items-center justify-center ${
          activeId === option.id
            ? "bg-blue-400 border-blue-400"
            : "border-neutral-0"
        }`}
      >
        {activeId === option.id && (
          <div className="h-75 w-75 rounded-full bg-neutral-900" />
        )}
      </div>
      <span className="text-preset-5">{option.label}</span>
    </label>
  );
}
