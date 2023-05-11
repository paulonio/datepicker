import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { CalendarIcon, CloseIcon, Field, FieldWrapper, Icon, Label, Wrapper } from './styled';
import calendar from '@utils/ClassCalendar';
import type { Action } from '@/types/types';
import { DATE_REGEX } from '@constants/constants';
import type { DatepickerProps } from '@components/Datepicker/Datepicker';

interface InputProps {
  label: 'From' | 'To';
  date: Date | null;
  config: DatepickerProps;
  dispatch: (action: Action) => void;
}

const parseStringToDate = (dateString: string) => {
  if (!dateString) {
    return null;
  }
  const [day, month, year] = dateString
    .trim()
    .split('/')
    .map((item) => Number(item));

  const date = new Date(year, month - 1, day);
  return date;
};

const updateSelectedDate = (
  inputDate: string,
  label: 'From' | 'To',
  dispatch: (action: Action) => void
) => {
  const date = parseStringToDate(inputDate);
  if (date) {
    const type = label === 'From' ? 'SET_DATE_FROM' : 'SET_DATE_TO';
    const action: Action = { type, payload: { date } };
    dispatch(action);
  }
};

const Input: FC<InputProps> = ({ label, date, config, dispatch }) => {
  const [inputDate, setInputDate] = useState<string>('');
  const { minDate, maxDate } = config;

  useEffect(() => {
    const dateToUpdate = calendar.parseDateToString(date);
    setInputDate(dateToUpdate);
  }, [date]);

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
    const dateObject = parseStringToDate(inputDate);
    if ((dateObject && dateObject <= minDate) || (dateObject && dateObject >= maxDate)) {
      const dateString = calendar.parseDateToString(date);
      setInputDate(dateString);
      return;
    }

    updateSelectedDate(inputDate, label, dispatch);
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

  return (
    <Wrapper>
      <Label>{label}</Label>
      <FieldWrapper>
        <CalendarIcon>
          <Icon src="./assets/icons/Calendar.svg" />
        </CalendarIcon>
        <Field
          value={inputDate}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder="Choose Date"
          data-testid="input"
        />
        {inputDate && (
          <CloseIcon onClick={resetInput} data-testid="close-icon">
            <Icon src="./assets/icons/Clear.svg" />
          </CloseIcon>
        )}
      </FieldWrapper>
    </Wrapper>
  );
};

export default Input;
