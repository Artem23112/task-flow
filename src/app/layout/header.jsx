import { useTasks } from "features/task/hooks/useTasks";
import { TextAlignJustify } from "lucide-react";
import { ChartColumn, House, Plus, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TabLink } from "shared/components/ui/buttons/link";
import { cn } from "shared/utils/cn";
import { pluralize } from "shared/utils/pluralize";

const TabsConfig = [
  {
    to: "/task-list",
    text: "Главная",
    icon: House,
  },

  {
    to: "/create",
    text: "Создать",
    icon: Plus,
  },
  {
    to: "/statistics",
    text: "Статистика",
    icon: ChartColumn,
  },
];

export const Header = () => {
  const navigate = useNavigate();
  const { tasks } = useTasks();
  const [isBurgerOpened, setIsBurgerOpened] = useState(true);
  const burgerClass = isBurgerOpened ? "w-full" : "w-0";

  const toggleBurger = () => {
    setIsBurgerOpened((prev) => !prev);
  };

  return (
    <header className="border-b-2 border-gray-200 bg-white">
      <div className="container flex max-w-6xl items-center justify-between py-3.5">
        <div className="flex gap-x-6">
          <a
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent"
            href="/"
          >
            TaskFlow
          </a>

          <ul
            className={cn(
              "absolute top-0 right-0 bottom-0 left-0 z-10 space-y-1 overflow-hidden bg-white pt-2 pl-2 transition-all *:w-max sm:static sm:flex sm:w-full sm:gap-3 sm:p-0",
              burgerClass,
            )}
          >
            {TabsConfig.map((item) => {
              return (
                <li key={item.text}>
                  <TabLink to={item.to} text={item.text}>
                    <item.icon width={"16px"} />
                  </TabLink>
                </li>
              );
            })}
            <button
              className="absolute top-1.5 right-1.5 sm:hidden"
              onClick={toggleBurger}
            >
              <X />
            </button>
          </ul>
        </div>
        <button
          className="absolute right-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-sm font-medium text-white sm:static"
          onClick={() => {
            navigate("/task-list");
          }}
        >
          {tasks.length}{" "}
          {pluralize(tasks.length, ["задача", "задачи", "задач"])}
        </button>
        <button
          className="flex flex-col gap-y-0.5 sm:hidden"
          onClick={toggleBurger}
        >
          <TextAlignJustify className="text-gray-600" />
        </button>
      </div>
    </header>
  );
};
