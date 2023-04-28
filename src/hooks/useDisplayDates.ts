import {
  getAllDaysInMonth,
  getPreviousMonthDates,
  getNextMonthDates,
  getWeekDates,
} from '../utils/utils';

export const useDisplayDates = (type: string, date: number, month: number, year: number) => {
  if (type === 'week') {
    const weekDates = getWeekDates(date, month, year);
    return weekDates;
  }

  const daysInCurrentMonth = getAllDaysInMonth(month, year);
  const daysInPreviousMonth = getPreviousMonthDates(month, year);
  const daysInNextMonth = getNextMonthDates(month, year);
  const allDays = [...daysInPreviousMonth, ...daysInCurrentMonth, ...daysInNextMonth];

  return allDays;
};
