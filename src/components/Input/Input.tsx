import React, { FC, useEffect, useState } from 'react';
import calendar from '@utils/ClassCalendar';
import { useInputHandlers } from '@hooks/useInputHandlers';
import type { DatepickerProps } from '@components/Datepicker/Datepicker';
import { CalendarIcon, CloseIcon, Field, FieldWrapper, Icon, Label, Wrapper } from './styled';
import type { Action } from '@/types/types';

interface InputProps {
  label: 'From' | 'To';
  date: Date | null;
  config: DatepickerProps;
  dispatch: (action: Action) => void;
}

const Input: FC<InputProps> = ({ label, date, config, dispatch }) => {
  const [inputDate, setInputDate] = useState<string>('');

  useEffect(() => {
    const dateToUpdate = calendar.parseDateToString(date);
    setInputDate(dateToUpdate);
  }, [date]);

  const { handleFocus, handleBlur, handleChange, resetInput } = useInputHandlers(
    inputDate,
    label,
    date,
    config,
    setInputDate,
    dispatch
  );

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
