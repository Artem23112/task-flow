import { TasksContext } from "app/providers/task-context";
import { useContext } from "react";

export const useTasks = (key = "tasks") => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("useTasks must be used inside a TasksProvider");

  return context;
};
