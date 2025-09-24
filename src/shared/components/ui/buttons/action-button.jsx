import { cn } from "shared/utils/cn";

const variants = {
  default: "bg-blue-600  hover:bg-blue-700 ",
  positive: "bg-green-600 hover:bg-green-700  rounded-lg font-medium ",
  negative: "bg-red-600 hover:bg-red-700  font-medium ",
  warning:
    "bg-yellow-200 text-yellow-700 border-yellow-200 hover:bg-yellow-300",
  common:
    "inline-flex justify-center rounded-xl text-white px-6 py-3 text-center transition-colors",
};

export const ActionButton = ({
  className = "",
  variant,
  children,
  ...attr
}) => {
  return (
    <button
      className={cn(variants.common, variants[variant], className)}
      {...attr}
    >
      {children}
    </button>
  );
};
