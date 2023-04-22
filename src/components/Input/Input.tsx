import React, { FC } from 'react';
import { Field, InputIcon, Label, Wrapper } from './styled';

interface InputProps {
  date?: string;
  label: string;
}

const Input: FC<InputProps> = ({ date, label }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputIcon>
        <Field value={date} />
      </InputIcon>
    </Wrapper>
  );
};

export default Input;
