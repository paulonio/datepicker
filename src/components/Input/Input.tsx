import React, { FC, useEffect, useState } from 'react';

import type { DatepickerProps } from '@components/Datepicker/Datepicker';

import calendar from '@utils/ClassCalendar';
import { useInputHandlers } from '@hooks/useInputHandlers';
import CalendarIcon from '@icons/CalendarIcon';
import CloseIcon from '@icons/CloseIcon';
import type { Action } from '@/types/types';

import { RightIconWrapper, Field, FieldWrapper, Label, LeftIconWrapper, Wrapper } from './styled';

interface InputProps {
  label: 'From' | 'To' | 'Date';
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
        <LeftIconWrapper>
          <CalendarIcon />
        </LeftIconWrapper>
        <Field
          value={inputDate}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder="Choose Date"
          data-testid="input"
        />
        {inputDate && (
          <RightIconWrapper onClick={resetInput} data-testid="close-icon">
            <CloseIcon />
          </RightIconWrapper>
        )}
      </FieldWrapper>
    </Wrapper>
  );
};

export default Input;
