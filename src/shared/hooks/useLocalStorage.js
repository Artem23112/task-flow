import { useEffect, useState } from "react";

export const useLocalStorage = (key = "", initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : initialValue;
    } catch (err) {
      console.error("Ошибка чтения из localStorage", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Ошибка записи в localStorage", err);
    }
  }, [key, value]);

  return [value, setValue];
};
