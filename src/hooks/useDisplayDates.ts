import type { View } from '../components/Datepicker/Datepicker';
import { Mode, getAllDays, getWeekDates } from '../utils/utils';

export const useDisplayDates = (
  mode: Mode,
  view: View,
  day: number,
  month: number,
  year: number
) => {
  const allDays =
    view === 'weekly' ? getWeekDates(mode, day, month, year) : getAllDays(mode, month, year);

  return allDays;
};
