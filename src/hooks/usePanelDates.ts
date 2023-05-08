import { useState, useEffect } from 'react';

export const usePanelDates = (
  currentCalendar: 'From' | 'To',
  dateFrom: Date | null,
  dateTo: Date | null
) => {
  const currentDate = currentCalendar === 'From' ? dateFrom : dateTo;
  const [date, setDate] = useState<Date | null>(() => currentDate);

  useEffect(() => {
    if (currentDate) {
      setDate(currentDate);
    }
  }, [currentDate]);

  const newDate = date ? new Date(date.toISOString()) : new Date();
  return { newDate, setDate };
};
