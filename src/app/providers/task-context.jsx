import { tasks as t } from "features/task/mock/tasks";
import { createEvent, getEventInfo } from "features/task/utils/events.helpers";
import { createContext } from "react";
import { useLocalStorage } from "shared/hooks/useLocalStorage";
export const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", t);

  const toggleIsCompleted = (taskId) => {
    const newTasks = tasks.map((item) => {
      if (item.id !== taskId) return item;
      const eventName = !item.completed ? "completed" : "uncompleted";

      return {
        ...item,
        completed: !item.completed,
        history: [...item.history, createEvent(eventName)],
      };
    });

    setTasks(newTasks);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((item) => {
      return item.id !== taskId;
    });
    setTasks(newTasks);
  };

  const addHistoryEvent = (taskId, eventName) => {
    const eventInfo = getEventInfo(eventName);
    const newTasks = tasks.map((item) => {
      if (item.id === taskId)
        return { ...item, history: [...item.history, eventInfo] };
    });
    setTasks(newTasks);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        deleteTask,
        toggleIsCompleted,
        addHistoryEvent,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
