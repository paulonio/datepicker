import type { Calendar, Init, Mode, WeekendStatus } from '@/types/types';

class Decorator implements Calendar {
  component: Calendar;

  constructor(component: Calendar) {
    this.component = component;
  }

  parseDateToString(date: Date | null) {
    return this.component.parseDateToString(date);
  }

  changeSundayWeekToMonday(day: number) {
    return this.component.changeSundayWeekToMonday(day);
  }

  getAmountDaysInMonth(month: number, year: number) {
    return this.component.getAmountDaysInMonth(month, year);
  }

  getAllDaysInMonth(currentMonth: number, currentYear: number) {
    return this.component.getAllDaysInMonth(currentMonth, currentYear);
  }

  getPreviousMonthDates(mode: Mode, currentMonth: number, currentYear: number) {
    return this.component.getPreviousMonthDates(mode, currentMonth, currentYear);
  }

  getNextMonthDates(mode: Mode, currentMonth: number, currentYear: number) {
    return this.component.getNextMonthDates(mode, currentMonth, currentYear);
  }

  getAllDays(mode: Mode, month: number, year: number) {
    return this.component.getAllDays(mode, month, year);
  }

  getWeekDates(mode: Mode, currentDate: number, currentMonth: number, currentYear: number) {
    return this.component.getWeekDates(mode, currentDate, currentMonth, currentYear);
  }

  getToday() {
    return this.component.getToday();
  }

  isValidDate(date: Date, minDate?: Date, maxDate?: Date) {
    return this.component.isValidDate(date, minDate, maxDate);
  }

  setWeekendStatus(date: Date) {
    return this.component.setWeekendStatus(date);
  }

  parseDate(date: Date) {
    return this.component.parseDate(date);
  }

  showWeekend(isWeekend: boolean, weekendStatus: WeekendStatus) {
    return this.component.showWeekend(isWeekend, weekendStatus);
  }

  getMode(date: Date, selectedDates: Init, selectOneDate: boolean, selectedDate: Date) {
    return this.component.getMode(date, selectedDates, selectOneDate, selectedDate);
  }
}

export default Decorator;
