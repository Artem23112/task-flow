import { TaskCard } from "features/task/components/task-card";
import { useTasks } from "features/task/hooks/useTasks";

export const TasksList = ({ displayedTasks = [] }) => {
  const { toggleIsCompleted, deleteTask } = useTasks();

  return (
    <ul className="space-y-2">
      {displayedTasks.map((item) => {
        return (
          <li key={item.id}>
            <TaskCard
              info={item}
              toggleIsCompleted={toggleIsCompleted}
              deleteTask={deleteTask}
            />
          </li>
        );
      })}
    </ul>
  );
};
