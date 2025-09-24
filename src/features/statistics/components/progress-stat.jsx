import { cn } from "shared/utils/cn";

const variants = {
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
};

export const ProgressStat = ({ color, text, allCount, count }) => {
  const variant = variants[color];
  const progressBarSize = Math.round((count / allCount) * 100);

  return (
    <div className="flex justify-between gap-3">
      <div className={"flex items-center gap-x-3"}>
        <span className={cn("h-4 w-4 rounded-full", variant)} />
        <p className="text-gray-700 capitalize">{text}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="h-2 w-24 rounded-full bg-gray-200">
          <div
            style={{ width: progressBarSize + "%" }}
            className={cn("h-2 rounded-full", variant)}
          ></div>
        </div>
        <p className="text-sm text-gray-600">{count}</p>
      </div>
    </div>
  );
};
