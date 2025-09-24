import dayjs from "dayjs";

const priorities = ["low", "medium", "high"];

/**
 * Фильтрует и сортирует массив задач
 * @param {Array} tasks Массив задач
 * @param {string} filter "all" | "active" | "completed"
 * @param {string} sort "date" | "priority" | "deadline"
 * @param {isReverse} isReverse Boolean
 * @returns {Array} Новый массив задач
 */

export function getFilteredAndSortedTasks(
  tasks,
  filter,
  sort,
  isReverse = false,
) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  filteredTasks.sort((a, b) => {
    let [_1, _2] = isReverse ? [b, a] : [a, b];

    switch (sort) {
      case "date":
        return dayjs(_2.createdAt).valueOf() - dayjs(_1.createdAt).valueOf();
      case "priority":
        return (
          priorities.indexOf(_2.priority) - priorities.indexOf(_1.priority)
        );
      case "deadline":
        return dayjs(_2.deadline).valueOf() - dayjs(_1.deadline).valueOf();
      default:
        return 0;
    }
  });

  return filteredTasks;
}
