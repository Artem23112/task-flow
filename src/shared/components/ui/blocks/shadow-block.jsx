import { cn } from "shared/utils/cn";

export const ShadowBlock = ({ className = "", hover = false, children }) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white shadow-sm",
        hover && "transition-shadow hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
};
