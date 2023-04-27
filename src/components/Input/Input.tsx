import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { CalendarIcon, CloseIcon, Field, FieldWrapper, Icon, Label, Wrapper } from './styled';

interface InputProps {
  label: 'From' | 'To';
  date: Date | null;
  onDateChange: (date: Date | null) => void;
  setCurrentCalendar: (value: 'From' | 'To') => void;
  // TODO fix
  toggleCalendar: (bool: boolean) => void;
}

export const updateInput = (date: Date | null) => {
  if (!date) {
    return '';
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${day}/${month + 1}/${year}`;
};

const Input: FC<InputProps> = ({
  label,
  date,
  onDateChange,
  setCurrentCalendar,
  toggleCalendar,
}) => {
  const [inputDate, setInputDate] = useState<string>('');

  useEffect(() => {
    const dateToUpdate = updateInput(date);
    setInputDate(dateToUpdate);
  }, [date]);

  const updateSelectedDate = () => {
    if (!onDateChange) {
      return;
    }

    if (inputDate === '') {
      return;
    }

    const [day, month, year] = inputDate
      .trim()
      .split('/')
      .map((item) => Number(item));

    onDateChange(new Date(year, month - 1, day));
  };

  const handleFocus = () => {
    toggleCalendar(true);
    setCurrentCalendar(label);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputDate(value);
  };

  const resetInput = () => {
    setInputDate('');
    onDateChange(null);
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
          onBlur={updateSelectedDate}
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
