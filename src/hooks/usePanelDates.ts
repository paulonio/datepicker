import { useState, useEffect } from 'react';

export const usePanelDates = (
  fromTo: 'From' | 'To',
  dateFrom: Date | null,
  dateTo: Date | null
) => {
  // TODO fix
  const currentDate = fromTo === 'From' ? dateFrom : dateTo;

  if (!currentDate) {
    throw new Error('Invalid date.');
  }

  const [date, setDate] = useState<Date>(() => currentDate);

  useEffect(() => {
    if (currentDate) {
      setDate(currentDate);
    }
  }, [currentDate]);

  const newDate = new Date(date.toISOString());
  return { newDate, setDate };
};
