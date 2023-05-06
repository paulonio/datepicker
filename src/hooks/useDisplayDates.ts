import type { View } from '../components/Datepicker/Datepicker';
import calendar, { Mode } from '../utils/ClassCalendar';

export const useDisplayDates = (mode: Mode, view: View, date: Date) => {
  const { day, month, year } = calendar.parseDate(date);
  const allDays =
    view === 'weekly'
      ? calendar.getWeekDates(mode, day, month, year)
      : calendar.getAllDays(mode, month, year);

  return allDays;
};
