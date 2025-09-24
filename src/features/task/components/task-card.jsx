import dayjs from "dayjs";
import { Calendar, Clock, PenLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "shared/components/ui/badges";
import { ShadowBlock } from "shared/components/ui/blocks/shadow-block";
import { IconLabel } from "shared/components/ui/icons/icon-label";
import { useNav } from "shared/hooks/useNav";
import { cn } from "shared/utils/cn";
import { standardFormat } from "shared/utils/date-formats";

export const TaskCard = ({ info, toggleIsCompleted, deleteTask }) => {
  const { goToEditTask } = useNav();
  const titleClassName = cn(
    " sm:text-lg font-semibold text-gray-900 transition-colors hover:text-blue-600",
    info.completed && "text-gray-500 line-through",
  );

  return (
    <ShadowBlock className="flex justify-between gap-x-3 rounded-lg border border-gray-200 bg-white p-4 sm:p-6">
      <div className="flex gap-x-3">
        <input
          className="mt-1 h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:h-5 sm:w-5"
          type="checkbox"
          checked={info.completed}
          onChange={() => {
            toggleIsCompleted(info.id);
          }}
        />
        <div className="xs:space-y-2 space-y-1">
          <div className="xs:flex-row flex flex-col gap-2.5">
            <Link to={`/task-list/${info.id}/info`}>
              <h5 className={titleClassName}>{info.title}</h5>
            </Link>
            <Badge
              className="self-start"
              type="priority"
              value={info.priority}
            />
          </div>
          <p className="line-clamp-2 text-sm text-gray-600 md:text-base">
            {info.description}
          </p>
          <div className="xs:flex-row xs:gap-3 flex flex-col text-sm text-gray-600">
            <span className="flex items-center gap-x-2">
              <IconLabel text={"Дедлайн:"}>
                <Calendar width={16} />
              </IconLabel>
              <span>{dayjs(info.deadline).format(standardFormat)}</span>
            </span>
            <span className="flex items-center gap-x-2">
              <IconLabel text={"Создана:"}>
                <Clock width={16} height={16} />
              </IconLabel>
              <span>{dayjs(info.createdAt).format(standardFormat)}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-x-2">
        <button
          className="btn hover-blue rounded-lg px-2 py-1 text-gray-400 transition-colors"
          onClick={() => goToEditTask(info.id)}
        >
          <PenLine width={16} />
        </button>
        <button
          className="btn hover-red rounded-lg px-2 py-1 text-gray-400 transition-colors"
          onClick={() => {
            deleteTask(info.id);
          }}
        >
          <Trash2 width={16} />
        </button>
      </div>
    </ShadowBlock>
  );
};
