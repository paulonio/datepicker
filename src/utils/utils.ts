import { CELLS_AMOUNT } from '../constants/constants';

export interface DisplayDate {
  currentYear: number;
  currentMonth: number;
  currentDate: number;
  isCurrentMonth: boolean;
}

export type Mode = 'su' | 'mo';

export const sundayWeekToMonday = (day: number) => {
  if (day === 0) {
    return 6;
  }

  return day - 1;
};

export const getAmountDaysInMonth = (month: number, year: number) => {
  const date = new Date(year, month + 1, 1);
  date.setMinutes(-1);
  return date.getDate();
};

export const getAllDaysInMonth = (currentMonth: number, currentYear: number) => {
  const daysAmount = getAmountDaysInMonth(currentMonth, currentYear);
  const amount: Array<DisplayDate> = [];

  for (let i = 1; i <= daysAmount; i++) {
    amount.push({
      currentYear,
      currentMonth,
      currentDate: i,
      isCurrentMonth: true,
    });
  }

  return amount;
};

export const getPreviousMonthDates = (mode: Mode, currentMonth: number, currentYear: number) => {
  const amountPreviosMonthDays = getAmountDaysInMonth(currentMonth - 1, currentYear);
  const firstDayInCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();
  const firstDay =
    mode === 'su' ? firstDayInCurrentMonth : sundayWeekToMonday(firstDayInCurrentMonth);

  const amount: Array<DisplayDate> = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    amount.push({
      currentYear,
      currentMonth: currentMonth - 1,
      currentDate: amountPreviosMonthDays - i,
      isCurrentMonth: false,
    });
  }

  return amount;
};

export const getNextMonthDates = (mode: Mode, currentMonth: number, currentYear: number) => {
  const currentDatesAmount = getAmountDaysInMonth(currentMonth, currentYear);
  const previousDatesAmount = getPreviousMonthDates(mode, currentMonth, currentYear).length;
  const daysAmount = CELLS_AMOUNT - currentDatesAmount - previousDatesAmount;
  const amount: Array<DisplayDate> = [];

  for (let i = 1; i <= daysAmount; i++) {
    amount.push({
      currentYear,
      currentMonth: currentMonth + 1,
      currentDate: i,
      isCurrentMonth: false,
    });
  }

  return amount;
};

export const getAllDays = (mode: Mode, month: number, year: number) => {
  const daysInCurrentMonth = getAllDaysInMonth(month, year);
  const daysInPreviousMonth = getPreviousMonthDates(mode, month, year);
  const daysInNextMonth = getNextMonthDates(mode, month, year);
  const allDays = [...daysInPreviousMonth, ...daysInCurrentMonth, ...daysInNextMonth];

  return allDays;
};

export const getWeekDates = (
  mode: Mode,
  currentDate: number,
  currentMonth: number,
  currentYear: number
) => {
  const allDays = getAllDays(mode, currentMonth, currentYear);
  const dayIdx = allDays.findIndex(
    (date) => date.currentDate === currentDate && date.currentMonth === currentMonth
  );
  if (!dayIdx && dayIdx !== 0) {
    return [];
  }
  const firstDayInWeekIdx = Math.trunc(dayIdx / 7) * 7;
  const allWeekDays = allDays.slice(firstDayInWeekIdx, firstDayInWeekIdx + 7);
  return allWeekDays;
};
