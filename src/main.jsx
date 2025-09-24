import { Root } from "app/routes/root";
import { CreateTaskPage } from "app/routes/tasks/create-task-page";
import { TaskEditPage, taskEditLoader } from "app/routes/tasks/task-edit-page";
import { TaskInfoPage, taskInfoLoader } from "app/routes/tasks/task-info-page";
import { TaskStatisticsPage } from "app/routes/tasks/task-statistics-page";
import { TasksListPage } from "app/routes/tasks/tasks-list-page";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/task-list",
        element: <TasksListPage />,
      },
      {
        path: "/task-list/:taskId/info",
        element: <TaskInfoPage />,
        loader: taskInfoLoader,
      },
      {
        path: "/task-list/:taskId/edit",
        element: <TaskEditPage />,
        loader: taskEditLoader,
      },
      {
        path: "/create",
        element: <CreateTaskPage />,
      },
      {
        path: "/statistics",
        element: <TaskStatisticsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
