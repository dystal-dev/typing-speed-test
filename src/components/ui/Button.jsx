const buttonVariants = {
  primary:
    "text-preset-3-semiBold text-neutral-0 px-300 py-200 rounded-12 bg-blue-600",
  secondary:
    "text-preset-3-semiBold text-neutral-0 px-200 py-125 rounded-12 bg-neutral-800 gap-125",
  "secondary-muted":
    "text-preset-3-semiBold text-neutral-0 px-200 py-125 h-[56px] rounded-12 bg-neutral-800 gap-125",
  settings:
    "text-preset-5 text-neutral-0 px-125 py-75 rounded-8 border-1 border-neutral-500 hover:text-blue-400 hover:border-blue-400",
};

export default function Button({ variant = "primary", children, ...props }) {
  return (
    <button className={`cursor-pointer ${buttonVariants[variant]}`} {...props}>
      {children}
    </button>
  );
}
