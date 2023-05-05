import { useState, useEffect } from 'react';

export const usePanelDates = (
  fromTo: 'From' | 'To',
  dateFrom: Date | null,
  dateTo: Date | null
) => {
  // TODO fix
  const date = fromTo === 'From' ? dateFrom : dateTo;

  if (!date) {
    throw new Error('Invalid date.');
  }

  const [month, setMonth] = useState<number>(() => date.getMonth());
  const [year, setYear] = useState<number>(() => date.getFullYear());
  const [day, setDay] = useState<number>(() => date.getDate());

  useEffect(() => {
    if (date) {
      setDay(date.getDate());
      setMonth(date.getMonth());
      setYear(date.getFullYear());
    }
  }, [date]);

  return { day, month, year, setDay, setMonth, setYear };
};
