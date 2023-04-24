import { MONTHS } from '../constants/constants';
import { getAmountDaysInMonth } from './utils';

class ClassCalendar {
  dateFrom: Date;

  dateTo: Date;

  currentDate: Date;

  constructor(dateFrom: Date, dateTo: Date, currentDate: Date) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.currentDate = currentDate;
  }

  getCurrentMonth() {
    const monthIdx = this.currentDate.getMonth();
    return MONTHS[monthIdx];
  }

  getCurrentYear() {
    return this.currentDate.getFullYear();
  }

  getAmountCurrentMonthDays() {
    const month = this.currentDate.getMonth();
    const year = this.getCurrentYear();
    return getAmountDaysInMonth(month, year);
  }

  getAmountPreviosMonthDays() {
    const month = this.currentDate.getMonth() + 1;
    const year = this.getCurrentYear();
    return getAmountDaysInMonth(month, year);
  }

  getFirstDayInMonth() {
    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const currentMonthFirstDay = new Date(currentYear, currentMonth, 1);
    return currentMonthFirstDay.getDay();
  }
}

export default ClassCalendar;
