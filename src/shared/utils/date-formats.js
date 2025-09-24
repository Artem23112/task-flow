import dayjs from "dayjs";

export const standardFormat = "DD.MM.YYYY";
const formatMinSec = "HH:mm";

export const getFullParseDate = (date) => {
  const dmy = dayjs(date).format(standardFormat);
  const ms = dayjs(date).format(formatMinSec);
  return `${dmy} в ${ms}`;
};
