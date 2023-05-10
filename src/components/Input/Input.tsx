import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { CalendarIcon, CloseIcon, Field, FieldWrapper, Icon, Label, Wrapper } from './styled';
import calendar from '../../utils/ClassCalendar';
import type { Action } from '../../types/types';
import { DATE_REGEX } from '../../constants/constants';

interface InputProps {
  label: 'From' | 'To';
  date: Date | null;
  dispatch: (action: Action) => void;
}

const updateSelectedDate = (
  inputDate: string,
  label: 'From' | 'To',
  dispatch: (action: Action) => void
) => {
  if (!inputDate) {
    return;
  }

  const [day, month, year] = inputDate
    .trim()
    .split('/')
    .map((item) => Number(item));

  const type = label === 'From' ? 'SET_DATE_FROM' : 'SET_DATE_TO';
  const action: Action = { type, payload: { date: new Date(year, month - 1, day) } };
  dispatch(action);
};

const Input: FC<InputProps> = ({ label, date, dispatch }) => {
  const [inputDate, setInputDate] = useState<string>('');

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
        />
        {inputDate && (
          <CloseIcon onClick={resetInput}>
            <Icon src="./assets/icons/Clear.svg" />
          </CloseIcon>
        )}
      </FieldWrapper>
    </Wrapper>
  );
};

export default Input;
