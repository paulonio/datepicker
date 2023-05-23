import { ChangeEvent } from 'react';

import { DatepickerProps } from '@components/Datepicker/Datepicker';

import { DATE_REGEX } from '@constants/constants';
import calendar from '@utils/ClassCalendar';
import type { Action } from '@/types/types';

export const useInputHandlers = (
  inputDate: string,
  label: 'From' | 'To' | 'Date',
  date: Date | null,
  config: DatepickerProps,
  setInputDate: (inputDate: string) => void,
  dispatch: (action: Action) => void
) => {
  const { minDate, maxDate } = config;

  const handleFocus = () => {
    dispatch({ type: 'SET_CURRENT_CALENDAR', payload: { calendar: label } });
    dispatch({ type: 'TOGGLE_CALENDAR', payload: { showCalendar: true } });
  };

  const handleBlur = () => {
    if (!inputDate.match(DATE_REGEX)) {
      const dateString = calendar.parseDateToString(date);
      setInputDate(dateString);
      return;
    }
    const dateObject = calendar.parseStringToDate(inputDate);
    if ((dateObject && dateObject <= minDate) || (dateObject && dateObject >= maxDate)) {
      const dateString = calendar.parseDateToString(date);
      setInputDate(dateString);
      return;
    }

    calendar.updateSelectedDate(inputDate, label, dispatch);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputDate(value);
  };

  const resetInput = () => {
    setInputDate('');
    let type: 'SET_DATE' | 'SET_DATE_FROM' | 'SET_DATE_TO';

    if (label === 'Date') {
      type = 'SET_DATE';
    } else if (label === 'From') {
      type = 'SET_DATE_FROM';
    } else {
      type = 'SET_DATE_TO';
    }

    const action: Action = { type, payload: { date: null } };
    dispatch(action);
  };

  return { handleFocus, handleBlur, handleChange, resetInput };
};
