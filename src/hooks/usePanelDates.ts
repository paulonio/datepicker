import { useState, useEffect } from 'react';
import { getToday } from '../components/DateButtons/DateButtons';

export const usePanelDates = (
  fromTo: 'From' | 'To',
  dateFrom: Date | null,
  dateTo: Date | null
) => {
  // TODO fix
  const today = getToday();
  const [month, setMonth] = useState<number>(() => today.getMonth());
  const [year, setYear] = useState<number>(() => today.getFullYear());
  const [day, setDay] = useState<number>(() => today.getDate());

  const date = fromTo === 'From' ? dateFrom : dateTo;

  useEffect(() => {
    if (date) {
      setDay(date.getDate());
      setMonth(date.getMonth());
      setYear(date.getFullYear());
    }
  }, [date]);

  return { day, month, year, setDay, setMonth, setYear };
};
