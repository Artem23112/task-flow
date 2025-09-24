import { ArrowDownUp, Funnel } from "lucide-react";
import { ShadowBlock } from "shared/components/ui/blocks/shadow-block";
import { IconLabel } from "shared/components/ui/icons/icon-label";
import { cn } from "shared/utils/cn";

const filterButtons = [
  {
    id: "all",
    text: "Все",
  },
  {
    id: "active",
    text: "Активные",
  },
  {
    id: "completed",
    text: "Выполненные",
  },
];

const selectOptions = [
  {
    id: "date",
    text: "По дате",
  },
  {
    id: "priority",
    text: "По приоритету",
  },
  {
    id: "deadline",
    text: "По дедлайну",
  },
];

export const TasksFilterPanel = ({
  filter = "all",
  changeFilter,
  sort,
  changeSort,
  isReverse,
  changeIsReverse,
}) => {
  return (
    <ShadowBlock className="xs:p-6 xs:gap-y-3 mb-6 flex flex-wrap justify-between gap-y-2 p-4 md:flex-nowrap">
      <div className="xs:flex-row xs:items-center xs:gap-3 flex flex-col gap-2">
        <IconLabel
          className={"text-sm font-medium text-gray-600"}
          text="Фильтр:"
        >
          <Funnel width={16} height={16} />
        </IconLabel>
        <ul className="flex gap-x-2.5">
          {filterButtons.map((item) => {
            const activeClass = filter === item.id ? "active" : "bg-gray-100";
            return (
              <li key={item.text}>
                <button
                  className={cn(
                    "btn rounded-2xl px-3 py-1 text-sm font-medium",
                    activeClass,
                  )}
                  onClick={() => changeFilter(item.id)}
                >
                  {item.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="xs:flex-row xs:items-center xs:gap-3 flex flex-col gap-2">
        <IconLabel
          className={"text-sm font-medium text-gray-600"}
          text={"Сортировка:"}
        >
          <button
            className={cn(
              "rounded-lg border border-gray-200 p-1 transition-colors",
              isReverse && "border-blue-200 bg-blue-200 text-blue-600",
            )}
            onClick={() => changeIsReverse((prev) => !prev)}
          >
            <ArrowDownUp width={16} height={16} />
          </button>
        </IconLabel>
        <select
          className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
          value={sort}
          name="sort"
          onChange={(e) => {
            console.log("e", e.target.value);
            changeSort(e.target.value);
          }}
        >
          {selectOptions.map((item) => (
            <option className="" key={item.id} value={item.id}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    </ShadowBlock>
  );
};
