import { useState, useEffect } from 'react';

export const usePanelDates = (
  currentCalendar: 'From' | 'To' | 'Date',
  dateFrom: Date | null,
  dateTo: Date | null,
  oneDate: Date | null
) => {
  let currentDate: Date | null;

  if (currentCalendar === 'Date') {
    currentDate = oneDate;
  } else if (currentCalendar === 'From') {
    currentDate = dateFrom;
  } else {
    currentDate = dateTo;
  }

  const [date, setDate] = useState<Date | null>(() => currentDate);

  useEffect(() => {
    if (currentDate) {
      setDate(currentDate);
    }
  }, [currentDate]);

  const newDate = date ? new Date(date.toISOString()) : new Date();
  return { newDate, setDate };
};
