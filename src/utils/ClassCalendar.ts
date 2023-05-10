import { CELLS_AMOUNT } from '../constants/constants';
import CalendarDecorator from './CalendarDecorator';
import type { Calendar, DisplayDate, Mode } from '../types/types';

class ClassCalendar implements Calendar {
  changeSundayWeekToMonday(day: number) {
    if (day === 0) {
      return 6;
    }

    return day - 1;
  }

  getAmountDaysInMonth(month: number, year: number) {
    const date = new Date(year, month + 1, 1);
    date.setMinutes(-1);
    return date.getDate();
  }

  getAllDaysInMonth(currentMonth: number, currentYear: number) {
    const daysAmount = this.getAmountDaysInMonth(currentMonth, currentYear);
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
  }

  getPreviousMonthDates(mode: Mode, currentMonth: number, currentYear: number) {
    const amountPreviosMonthDays = this.getAmountDaysInMonth(currentMonth - 1, currentYear);
    const firstDayInCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();
    const firstDay =
      mode === 'su'
        ? firstDayInCurrentMonth
        : this.changeSundayWeekToMonday(firstDayInCurrentMonth);

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
  }

  getNextMonthDates(mode: Mode, currentMonth: number, currentYear: number) {
    const currentDatesAmount = this.getAmountDaysInMonth(currentMonth, currentYear);
    const previousDatesAmount = this.getPreviousMonthDates(mode, currentMonth, currentYear).length;
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
  }

  getAllDays(mode: Mode, month: number, year: number) {
    const daysInCurrentMonth = this.getAllDaysInMonth(month, year);
    const daysInPreviousMonth = this.getPreviousMonthDates(mode, month, year);
    const daysInNextMonth = this.getNextMonthDates(mode, month, year);
    const allDays = [...daysInPreviousMonth, ...daysInCurrentMonth, ...daysInNextMonth];

    return allDays;
  }

  getWeekDates(mode: Mode, currentDate: number, currentMonth: number, currentYear: number) {
    const allDays = this.getAllDays(mode, currentMonth, currentYear);
    const dayIdx = allDays.findIndex(
      (date) => date.currentDate === currentDate && date.currentMonth === currentMonth
    );
    if (!dayIdx && dayIdx !== 0) {
      return [];
    }
    const firstDayInWeekIdx = Math.trunc(dayIdx / 7) * 7;
    const allWeekDays = allDays.slice(firstDayInWeekIdx, firstDayInWeekIdx + 7);
    return allWeekDays;
  }

  getToday(): Date {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }

  isValidDate(date: Date, minDate?: Date, maxDate?: Date) {
    if (!minDate && !maxDate) {
      return false;
    }
    if (!minDate && maxDate && date >= maxDate) {
      return true;
    }
    if (!maxDate && minDate && date <= minDate) {
      return true;
    }
    if ((minDate && date <= minDate) || (maxDate && date >= maxDate)) {
      return true;
    }
    return false;
  }

  setWeekendStatus(date: Date) {
    const day = date.getDay();
    if (day === 6 || day === 0) {
      return true;
    }

    return false;
  }

  parseDateToString(date: Date | null) {
    if (!date) {
      return '';
    }

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${day}/${month + 1}/${year}`;
  }

  parseDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return { day, month, year };
  }
}

const instance = new ClassCalendar();
const calendar = new CalendarDecorator(instance);
export default calendar;
