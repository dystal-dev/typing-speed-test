import Button from "./Button.jsx";

export default function SettingButtons({ label, options, activeId, onChange }) {
  return (
    <ul
      key={label}
      className="text-preset-5 text-neutral-400 gap-75 flex items-center px-200 last:pr-0 first:pl-0"
    >
      <span className="pr-75 capitalize">{label}:</span>
      {options.map((option) => (
        <li key={option.id}>
          <Button
            variant="settings"
            className={
              activeId === option.id ? "!text-blue-400 !border-blue-400" : ""
            }
            onClick={() => onChange(option)}
          >
            {option.label}
          </Button>
        </li>
      ))}
    </ul>
  );
}
