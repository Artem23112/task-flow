import dayjs from "dayjs";

const events = [
  {
    name: "created",
    text: "Создана задача",
  },
  {
    name: "completed",
    text: "Отмечена как выполненная",
  },
  {
    name: "uncompleted",
    text: "Отмечена как невыполненная",
  },
  {
    name: "change-priority",
    text: "Изменен приоритет на",
  },
  {
    name: "edited",
    text: "Задача отредактирована",
  },
];

export const createEvent = (name) => {
  const date = dayjs().format();
  return { name, date };
};

export const getEventInfo = (e) => {
  const { name, text } = events.find((item) => item.name === e.name);
  return { date: e.date, name, text };
};
