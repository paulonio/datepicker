import { getAllDays } from '../utils/utils';

export const useDisplayDates = (month: number, year: number) => {
  const allDays = getAllDays(month, year);

  return allDays;
};
