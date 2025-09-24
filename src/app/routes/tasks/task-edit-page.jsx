import { PageLayout } from "app/layout/page-layout";
import dayjs from "dayjs";
import { TaskForm } from "features/task/components/task-form";
import { useTasks } from "features/task/hooks/useTasks";
import { createEvent } from "features/task/utils/events.helpers";
import { Pen } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import { IconLabel } from "shared/components/ui/icons/icon-label";

export function taskEditLoader({ params }) {
  return params.taskId;
}

export const TaskEditPage = () => {
  const taskId = useLoaderData();
  const { tasks, setTasks } = useTasks();
  const actualTaskInfo = tasks.find(
    (item) => String(item.id) === String(taskId),
  );
  const handleSubmit = (formData) => {
    const taskData = {
      ...actualTaskInfo,
      title: formData.name,
      description: formData.description,
      priority: formData.priority,
      deadline: dayjs(formData.deadline).format(),
      history: [...actualTaskInfo.history, createEvent("edited")],
    };

    const newTasks = tasks.map((item) => {
      if (item.id === taskId) return taskData;
      return item;
    });

    setTasks(newTasks);
  };

  return (
    <PageLayout
      className="container max-w-2xl pt-8"
      title={"Редактирование задачи"}
    >
      <TaskForm
        className="container mt-8 max-w-2xl"
        initialData={actualTaskInfo}
        onSubmitForm={handleSubmit}
        submitButton={
          <IconLabel text="Редактировать">
            <Pen width={20} />
          </IconLabel>
        }
      />
    </PageLayout>
  );
};
