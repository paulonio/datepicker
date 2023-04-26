import { useState, useEffect } from 'react';

export const usePanelDates = (fromTo: 'From' | 'To', dateFrom: Date, dateTo: Date) => {
  const date = fromTo === 'From' ? dateFrom : dateTo;
  const [month, setMonth] = useState<number>(date.getMonth());
  const [year, setYear] = useState<number>(date.getFullYear());
  const day = date.getDate();

  useEffect(() => {
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }, [date]);

  return { day, month, year, setMonth, setYear };
};
