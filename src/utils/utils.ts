import { CELLS_AMOUNT } from '../constants/constants';

export const getAmountDaysInMonth = (month: number, year: number) => {
  const date = new Date(year, month + 1, 1);
  date.setMinutes(-1);
  return date.getDate();
};

export const getAllDaysInMonth = (currentMonth: number, currentYear: number) => {
  const daysAmount = getAmountDaysInMonth(currentMonth, currentYear);
  const amount = [];

  for (let i = 1; i <= daysAmount; i++) {
    amount.push({
      currentYear,
      currentMonth,
      currentDate: i,
    });
  }

  return amount;
};

export const getPreviousMonthDates = (currentMonth: number, currentYear: number) => {
  const amountPreviosMonthDays = getAmountDaysInMonth(currentMonth - 1, currentYear);
  const firstDayInCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();

  const amount = [];

  for (let i = firstDayInCurrentMonth - 1; i >= 0; i--) {
    amount.push({
      currentYear,
      currentMonth: currentMonth - 1,
      currentDate: amountPreviosMonthDays - i,
    });
  }

  return amount;
};

export const getNextMonthDates = (currentMonth: number, currentYear: number) => {
  const currentDatesAmount = getAmountDaysInMonth(currentMonth, currentYear);
  const previousDatesAmount = getPreviousMonthDates(currentMonth, currentYear).length;
  const daysAmount = CELLS_AMOUNT - currentDatesAmount - previousDatesAmount;
  const amount = [];

  for (let i = 1; i <= daysAmount; i++) {
    amount.push({
      currentYear,
      currentMonth: currentMonth + 1,
      currentDate: i,
    });
  }

  return amount;
};
