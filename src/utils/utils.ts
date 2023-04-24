import { cellsAmount } from '../constants/constants';

export const getAllDaysInMonth = (daysAmountInMonth: number) => {
  const amount = [];

  for (let i = 1; i <= daysAmountInMonth; i++) {
    amount.push(i);
  }

  return amount;
};

export const getPreviousMonthDates = (
  amountPreviosMonthDays: number,
  firstDayInCurrentMonth: number
) => {
  const amount = [];

  for (let i = firstDayInCurrentMonth - 1; i >= 0; i--) {
    amount.push(amountPreviosMonthDays - i);
  }

  return amount;
};

export const getNextMonthDates = (previousDatesAmount: number, currentDatesAmount: number) => {
  const daysAmount = cellsAmount - currentDatesAmount - previousDatesAmount;
  const amount = [];

  for (let i = 1; i <= daysAmount; i++) {
    amount.push(i);
  }

  return amount;
};

export const getAmountDaysInMonth = (month: number, year: number) => {
  const date = new Date(year, month + 1, 1);
  date.setMinutes(-1);
  return date.getDate();
};
