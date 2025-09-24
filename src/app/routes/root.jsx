import { Header } from "app/layout/header";
import { TasksProvider } from "app/providers/task-context";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <TasksProvider>
        <Header />
        <Outlet />
      </TasksProvider>
    </div>
  );
};
