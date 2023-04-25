import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { CalendarIcon, CloseIcon, Field, FieldWrapper, Icon, Label, Wrapper } from './styled';

interface InputProps {
  label: string;
  dateFrom?: Date;
  onDateChange?: (date: Date) => void;
}

const Input: FC<InputProps> = ({ label, dateFrom, onDateChange }) => {
  const [date, setDate] = useState<string>('');

  const updateInput = () => {
    if (!dateFrom) {
      return '';
    }

    const year = dateFrom.getFullYear();
    const month = dateFrom.getMonth();
    const day = dateFrom.getDate();

    return `${day}-${month + 1}-${year}`;
  };

  useEffect(() => {
    const inputDate = updateInput();
    setDate(inputDate);
  }, [dateFrom]);

  const updateSelectedDate = () => {
    if (!onDateChange) {
      return;
    }
    const [day, month, year] = date
      .trim()
      .split('-')
      .map((item) => Number(item));

    onDateChange(new Date(year, month - 1, day));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDate(value);
  };

  const resetInput = () => {
    setDate('');
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <FieldWrapper>
        <CalendarIcon>
          <Icon src="./assets/icons/Calendar.svg" />
        </CalendarIcon>
        <Field
          value={date}
          onChange={handleChange}
          onBlur={updateSelectedDate}
          placeholder="Choose Date"
        />
        {date && (
          <CloseIcon onClick={resetInput}>
            <Icon src="./assets/icons/Clear.svg" />
          </CloseIcon>
        )}
      </FieldWrapper>
    </Wrapper>
  );
};

export default Input;
