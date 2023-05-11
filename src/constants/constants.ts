import type { DatepickerProps } from '@components/Datepicker/Datepicker';

export const SUNDAY_STARTS: Array<string> = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const MONDAY_STARTS: Array<string> = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

export const MONTHS: Array<string> = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const CELLS_AMOUNT: number = 42;

export const DATE_REGEX: RegExp =
  /^(3[01]|[12][0-9]|0[1-9])\/(1[0-2]|0[1-9])\/[2][0][0-4][0-9]{1}$|[1][9][7-9][0-9]{1}$/gm;

export const init: DatepickerProps = {
  start: 'mo',
  view: 'monthly',
  weekend: 'show',
  minDate: new Date(2021, 3, 2),
  maxDate: new Date(2025, 4, 25),
};
