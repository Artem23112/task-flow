import { cn } from "shared/utils/cn";

export const IconLabel = ({ className = "", children, text }) => {
  return (
    <span className={cn("flex items-center gap-x-2 leading-none", className)}>
      {children}
      {text}
    </span>
  );
};
