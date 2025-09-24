import dayjs from "dayjs";
import { TaskDetailItem } from "features/task/components/task-detail-item";
import { TaskDetailWrapper } from "features/task/components/task-detail-wrapper";
import { useTasks } from "features/task/hooks/useTasks";
import { getEventInfo } from "features/task/utils/events.helpers";
import { CheckCircle, CircleX, PenLine, Trash2 } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import { Badge } from "shared/components/ui/badges";
import { ActionButton } from "shared/components/ui/buttons/action-button";
import { BackButton } from "shared/components/ui/buttons/back-button";
import { IconLabel } from "shared/components/ui/icons/icon-label";
import { useNav } from "shared/hooks/useNav";
import { getFullParseDate, standardFormat } from "shared/utils/date-formats";

export function taskInfoLoader({ params }) {
  return params.taskId;
}

export const TaskInfoPage = () => {
  const { goToList, goToEditTask } = useNav();
  const taskId = useLoaderData();
  const { tasks, toggleIsCompleted, addHistoryEvent, deleteTask } = useTasks();
  const actualTaskInfo = tasks.find(
    (item) => String(item.id) === String(taskId),
  );

  if (!actualTaskInfo) return <p>Упс, такой задачи не существует</p>;

  const handleDelete = () => {
    deleteTask(actualTaskInfo.id);
    goToList();
  };
  const handleToggle = () => {
    toggleIsCompleted(taskId);
  };

  return (
    <main>
      <div className="container mt-8">
        <BackButton text="Назад к списку" />
      </div>
      <div className="container flex flex-col justify-between gap-5 sm:flex-row">
        <div className="flex flex-col">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            {actualTaskInfo.title}
          </h2>
          <div className="flex items-center gap-x-2">
            <Badge
              type="priority"
              value={actualTaskInfo.priority}
              text="приоритет"
            />
            <Badge type="status" value={actualTaskInfo.complete} />
          </div>
        </div>
        <ActionButton
          className="self-end sm:self-center"
          variant="default"
          onClick={() => goToEditTask(actualTaskInfo.id)}
        >
          <IconLabel text="Редактировать">
            <PenLine width={16} height={16} />
          </IconLabel>
        </ActionButton>
      </div>
      <div className="container flex flex-col gap-5 pt-5">
        {actualTaskInfo.description !== "" ? (
          <TaskDetailWrapper text="Описание">
            <p className="text-gray-700">{actualTaskInfo.description}</p>
          </TaskDetailWrapper>
        ) : (
          <></>
        )}

        <TaskDetailWrapper text="История">
          <ul className="flex flex-col gap-y-3">
            {actualTaskInfo.history.map((item) => {
              const { date, text } = getEventInfo(item);
              return (
                <li className="inline-flex gap-x-3" key={item.date}>
                  <span className="mt-2.5 inline-block h-2 w-2 rounded-full bg-blue-600" />
                  <TaskDetailItem
                    variant="regular"
                    title={text}
                    description={getFullParseDate(date)}
                  />
                </li>
              );
            })}
          </ul>
        </TaskDetailWrapper>

        <TaskDetailWrapper className="space-y-4" text="Детали">
          <TaskDetailItem
            variant={"accent"}
            title={"Дедлайн"}
            description={dayjs(actualTaskInfo.deadline).format(standardFormat)}
          />
          <TaskDetailItem
            variant={"accent"}
            title={"Создана"}
            description={dayjs(actualTaskInfo.createdAt).format(standardFormat)}
          />
          <TaskDetailItem
            variant={"accent"}
            title={"ID задачи"}
            description={"#" + actualTaskInfo.id}
          />
        </TaskDetailWrapper>

        <TaskDetailWrapper className="flex flex-col gap-y-3" text="Действия">
          {actualTaskInfo.completed ? (
            <ActionButton
              variant="warning"
              onClick={() => toggleIsCompleted(actualTaskInfo.id)}
            >
              <IconLabel text="Отменить выполнение">
                <CircleX width={16} height={16} />
              </IconLabel>
            </ActionButton>
          ) : (
            <ActionButton
              variant="positive"
              onClick={() => toggleIsCompleted(actualTaskInfo.id)}
            >
              <IconLabel text="Отметить как выполненную">
                <CheckCircle width={16} height={16} />
              </IconLabel>
            </ActionButton>
          )}
          <ActionButton variant="negative" onClick={handleDelete}>
            <IconLabel text="Удалить задачу">
              <Trash2 width={16} height={16} />
            </IconLabel>
          </ActionButton>
        </TaskDetailWrapper>
      </div>
    </main>
  );
};
