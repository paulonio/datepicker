import calendar from '../utils/ClassCalendar';
import { Mode, View } from '../types/types';

export const useDisplayDates = (mode: Mode, view: View, date: Date) => {
  const { day, month, year } = calendar.parseDate(date);
  const allDays =
    view === 'weekly'
      ? calendar.getWeekDates(mode, day, month, year)
      : calendar.getAllDays(mode, month, year);

  return allDays;
};
