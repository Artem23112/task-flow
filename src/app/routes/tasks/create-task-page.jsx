import dayjs from "dayjs";
import { TaskForm } from "features/task/components/task-form";
import { useTasks } from "features/task/hooks/useTasks";
import { createEvent } from "features/task/utils/events.helpers";
import { Plus } from "lucide-react";
import { MainTitleBlock } from "shared/components/ui/blocks/main-title-block";
import { BackButton } from "shared/components/ui/buttons/back-button";
import { IconLabel } from "shared/components/ui/icons/icon-label";

export const CreateTaskPage = () => {
  const { tasks, setTasks } = useTasks();

  const onSubmitForm = (formData) => {
    const taskData = {
      id: String(Date.now()),
      title: formData.name,
      description: formData.description,
      priority: formData.priority,
      completed: false,
      deadline: dayjs(formData.deadline),
      createdAt: dayjs().format(),
      history: [createEvent("created")],
    };

    setTasks([...tasks, taskData]);
  };

  return (
    <main>
      <div className="container max-w-2xl pt-8">
        <BackButton text="Назад к списку" />
        <MainTitleBlock
          title={"Создать новую задачу"}
          subtitle="Заполните информацию о задаче"
        />
      </div>
      <TaskForm
        className="container mx-auto mt-6 max-w-2xl"
        onSubmitForm={onSubmitForm}
        submitButton={
          <IconLabel text="Создать задачу">
            <Plus />
          </IconLabel>
        }
      />
    </main>
  );
};
