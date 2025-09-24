import { PageLayout } from "app/layout/page-layout";
import { ProgressStat } from "features/statistics/components/progress-stat";
import { TaskStatisticsBlock } from "features/statistics/components/tasks-statistics-block";
import { useTasks } from "features/task/hooks/useTasks";
import { ChartPie } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { ChartColumn, CircleCheck, Clock } from "lucide-react";
import { StatisticsWrapper } from "features/statistics/components/statistics-wrapper";
import { IconWrapper } from "shared/components/ui/icons/icon-wrapper";
import { CircularProgress } from "shared/components/ui/interactive/circular-progress";

export const TaskStatisticsPage = ({}) => {
  const { tasks } = useTasks();
  const { completedCount, uncompletedCount } = tasks.reduce(
    (acc, task) => {
      if (task.completed) acc.completedCount++;
      else acc.uncompletedCount++;
      return acc;
    },
    { completedCount: 0, uncompletedCount: 0 },
  );

  const { highCount, mediumCount, lowCount } = tasks.reduce(
    (acc, task) => {
      if (task.priority === "high") acc.highCount++;
      else if (task.priority === "medium") acc.mediumCount++;
      else if (task.priority === "low") acc.lowCount++;
      return acc;
    },
    { highCount: 0, mediumCount: 0, lowCount: 0 },
  );

  return (
    <PageLayout
      className="pt-6"
      title="Статистика задач"
      subtitle="Статистика вашей продуктивности"
    >
      <div className="container flex flex-col justify-between gap-6 pt-6 *:grow md:flex-row md:items-center">
        <TaskStatisticsBlock
          cnValue="text-gray-900"
          title={"Всего задач"}
          value={tasks.length}
        >
          <IconWrapper className="bg-blue-100 text-blue-600">
            <ChartColumn />
          </IconWrapper>
        </TaskStatisticsBlock>
        <TaskStatisticsBlock
          cnValue={"text-green-600"}
          title={"Выполнено"}
          value={completedCount}
        >
          <IconWrapper className="bg-green-100 text-green-600">
            <CircleCheck />
          </IconWrapper>
        </TaskStatisticsBlock>
        <TaskStatisticsBlock
          cnValue={"text-orange-600"}
          title={"В процессе"}
          value={uncompletedCount}
        >
          <IconWrapper className="bg-orange-100 text-orange-600">
            <Clock />
          </IconWrapper>
        </TaskStatisticsBlock>
      </div>
      <div className="container grid gap-6 pt-6 lg:grid-cols-2">
        <StatisticsWrapper
          title="Распределение по приоритетам"
          btn={
            <button className="text-gray-500">
              <ChartPie width={20} height={20} />
            </button>
          }
        >
          <div className="flex flex-col gap-3 pt-4">
            <ProgressStat
              text={"Высокий"}
              color={"red"}
              allCount={tasks.length}
              count={highCount}
            />
            <ProgressStat
              text={"Средний"}
              color={"yellow"}
              allCount={tasks.length}
              count={mediumCount}
            />
            <ProgressStat
              text={"Низкий"}
              color={"green"}
              allCount={tasks.length}
              count={lowCount}
            />
          </div>
        </StatisticsWrapper>
        <StatisticsWrapper
          title="Прогресс выполнения"
          btn={
            <button className="text-gray-500">
              <TrendingUp width={20} height={20} />
            </button>
          }
        >
          <div className="pt-4">
            <CircularProgress
              percentage={Math.round((completedCount / tasks.length) * 100)}
            />
          </div>
        </StatisticsWrapper>
      </div>
    </PageLayout>
  );
};
