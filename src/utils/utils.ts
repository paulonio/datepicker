import { CELLS_AMOUNT } from '../constants/constants';

export interface DisplayDate {
  currentYear: number;
  currentMonth: number;
  currentDate: number;
  isCurrentMonth: boolean;
}

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

export const getPreviousMonthDates = (currentMonth: number, currentYear: number) => {
  const amountPreviosMonthDays = getAmountDaysInMonth(currentMonth - 1, currentYear);
  const firstDayInCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();

  const amount: Array<DisplayDate> = [];

  for (let i = firstDayInCurrentMonth - 1; i >= 0; i--) {
    amount.push({
      currentYear,
      currentMonth: currentMonth - 1,
      currentDate: amountPreviosMonthDays - i,
      isCurrentMonth: false,
    });
  }

  return amount;
};

export const getNextMonthDates = (currentMonth: number, currentYear: number) => {
  const currentDatesAmount = getAmountDaysInMonth(currentMonth, currentYear);
  const previousDatesAmount = getPreviousMonthDates(currentMonth, currentYear).length;
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

export const getAllDays = (month: number, year: number) => {
  const daysInCurrentMonth = getAllDaysInMonth(month, year);
  const daysInPreviousMonth = getPreviousMonthDates(month, year);
  const daysInNextMonth = getNextMonthDates(month, year);
  const allDays = [...daysInPreviousMonth, ...daysInCurrentMonth, ...daysInNextMonth];

  return allDays;
};

export const getWeekDates = (currentDate: number, currentMonth: number, currentYear: number) => {
  const allDays = getAllDays(currentMonth, currentYear);
  const dayIdx = allDays.findIndex(
    (date) => date.currentDate === currentDate && date.currentMonth === currentMonth
  );
  if (!dayIdx) {
    return [];
  }
  const firstDayInWeekIdx = Math.trunc(dayIdx / 7) * 7;
  const allWeekDays = allDays.slice(firstDayInWeekIdx, firstDayInWeekIdx + 7);
  return allWeekDays;
};
