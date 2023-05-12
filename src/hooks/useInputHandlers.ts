import { ChangeEvent } from 'react';
import { DatepickerProps } from '@components/Datepicker/Datepicker';
import { DATE_REGEX } from '@constants/constants';
import calendar from '@utils/ClassCalendar';
import type { Action } from '@/types/types';

export const useInputHandlers = (
  inputDate: string,
  label: 'From' | 'To',
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
    const action: Action = {
      type: label === 'From' ? 'SET_DATE_FROM' : 'SET_DATE_TO',
      payload: { date: null },
    };
    dispatch(action);
  };

  return { handleFocus, handleBlur, handleChange, resetInput };
};
