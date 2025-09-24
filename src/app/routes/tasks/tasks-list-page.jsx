import { PageLayout } from "app/layout/page-layout";
import { TasksFilterPanel } from "features/task/components/tasks-filter-panel";
import { TasksList } from "features/task/components/tasks-list";
import { useTasks } from "features/task/hooks/useTasks";
import { getFilteredAndSortedTasks } from "features/task/utils/tasks.utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TasksListPage = () => {
  const navigate = useNavigate();
  const { tasks } = useTasks();
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");
  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    const toDisplay = getFilteredAndSortedTasks(tasks, filter, sort, isReverse);
    setDisplayedTasks(toDisplay);
  }, [filter, sort, tasks, isReverse]);

  return (
    <PageLayout
      cnForTitlesWrapper="pt-6"
      title={"Мои задачи"}
      subtitle={"Управляйте своими задачами эффективно"}
    >
      <div className="container mt-6">
        <TasksFilterPanel
          filter={filter}
          changeFilter={setFilter}
          sort={sort}
          changeSort={setSort}
          isReverse={isReverse}
          changeIsReverse={setIsReverse}
        />
        {tasks.length === 0 ? (
          <p className="text-center text-gray-600">
            Нет задач, хотите{" "}
            <button
              className="border-b leading-tight text-blue-600"
              onClick={() => navigate("/create")}
            >
              создать?
            </button>
          </p>
        ) : (
          <TasksList displayedTasks={displayedTasks} />
        )}
      </div>
    </PageLayout>
  );
};
