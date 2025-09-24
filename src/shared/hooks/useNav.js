import { useNavigate } from "react-router-dom";

export const useNav = () => {
  const navigation = useNavigate();

  const goToEditTask = (id) => {
    navigation(`/task-list/${id}/edit`);
  };

  const goToInfoTask = (id) => {
    navigation(`/task-list/${id}/info`);
  };

  const goToList = () => {
    navigation("/task-list");
  };

  return { goToEditTask, goToInfoTask, goToList };
};
