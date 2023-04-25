import { getAllDaysInMonth, getPreviousMonthDates, getNextMonthDates } from '../utils/utils';

export const useDisplayDates = (month: number, year: number) => {
  const daysInCurrentMonth = getAllDaysInMonth(month, year);
  const daysInPreviousMonth = getPreviousMonthDates(month, year);
  const daysInNextMonth = getNextMonthDates(month, year);
  const allDays = [...daysInPreviousMonth, ...daysInCurrentMonth, ...daysInNextMonth];

  return allDays;
};
