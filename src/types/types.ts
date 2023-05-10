export type View = 'weekly' | 'monthly';

export type WeekendStatus = 'show' | 'hide';

export type Mode = 'su' | 'mo';

export interface Init {
  from: Date | null;
  to: Date | null;
  currentCalendar: 'From' | 'To';
  showCalendar: boolean;
}

export type Action =
  | { type: 'SET_DATE_FROM'; payload: { date: Date | null } }
  | { type: 'SET_DATE_TO'; payload: { date: Date | null } }
  | { type: 'SET_CURRENT_CALENDAR'; payload: { calendar: 'From' | 'To' } }
  | { type: 'TOGGLE_CALENDAR'; payload: { showCalendar: boolean } };

export interface DisplayDate {
  currentYear: number;
  currentMonth: number;
  currentDate: number;
  isCurrentMonth: boolean;
}

export type Status = 'selectedDate' | 'selectedFrom' | 'selectedTo' | 'inRange' | '';

export interface Calendar {
  changeSundayWeekToMonday: (day: number) => number;
  getAmountDaysInMonth: (month: number, year: number) => number;
  getAllDaysInMonth: (currentMonth: number, currentYear: number) => DisplayDate[];
  getPreviousMonthDates: (mode: Mode, currentMonth: number, currentYear: number) => DisplayDate[];
  getNextMonthDates: (mode: Mode, currentMonth: number, currentYear: number) => DisplayDate[];
  getAllDays: (mode: Mode, month: number, year: number) => DisplayDate[];
  getWeekDates: (
    mode: Mode,
    currentDate: number,
    currentMonth: number,
    currentYear: number
  ) => DisplayDate[];
  getToday: () => Date;
  isValidDate: (date: Date, minDate?: Date, maxDate?: Date) => boolean;
  setWeekendStatus: (date: Date) => boolean;
  parseDateToString: (date: Date | null) => string;
  parseDate: (date: Date) => { day: number; month: number; year: number };
  showWeekend: (isWeekend: boolean, weekendStatus: WeekendStatus) => boolean;
  getMode: (date: Date, selectedDates: Init, selectOneDate: boolean, selectedDate: Date) => Status;
}
