import type { View } from '../components/Datepicker/Datepicker';
import calendar, { Mode } from '../utils/ClassCalendar';

export const useDisplayDates = (
  mode: Mode,
  view: View,
  day: number,
  month: number,
  year: number
) => {
  const allDays =
    view === 'weekly'
      ? calendar.getWeekDates(mode, day, month, year)
      : calendar.getAllDays(mode, month, year);

  return allDays;
};
