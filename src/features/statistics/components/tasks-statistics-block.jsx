import { ShadowBlock } from "shared/components/ui/blocks/shadow-block";
import { cn } from "shared/utils/cn";

export const TaskStatisticsBlock = ({
  cnValue = "",
  title,
  value,
  children,
}) => {
  return (
    <ShadowBlock className="flex justify-between gap-x-5 p-6">
      <div>
        <h6>{title}</h6>
        <span className={cn("text-3xl font-bold", cnValue)}>{value}</span>
      </div>
      {children}
    </ShadowBlock>
  );
};
