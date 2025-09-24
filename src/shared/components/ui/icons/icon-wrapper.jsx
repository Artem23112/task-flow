import { cn } from "shared/utils/cn";

export const IconWrapper = ({ className = "", children }) => {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-lg",
        className,
      )}
    >
      {children}
    </div>
  );
};
