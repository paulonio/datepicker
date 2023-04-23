import React, { ChangeEvent, FC, useState } from 'react';
import { CalendarIcon, CloseIcon, Field, FieldWrapper, Icon, Label, Wrapper } from './styled';

interface InputProps {
  label: string;
}

const Input: FC<InputProps> = ({ label }) => {
  const [date, setDate] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
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
        <Field value={date} onChange={handleChange} placeholder="Choose Date" />
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
