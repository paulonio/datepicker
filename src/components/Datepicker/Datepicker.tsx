import React, { FC } from 'react';
import { DatepickerWrapper, Wrapper } from './styled';
import Global from '../../styles/Global';
import Input from '../Input/Input';

interface DatepickerProps {
  from?: string;
  to?: string;
}

const Datepicker: FC<DatepickerProps> = ({ from, to }) => {
  return (
    <>
      <Global />
      <Wrapper>
        <DatepickerWrapper>
          <Input date={from} label="From" />
          <Input date={to} label="To" />
          <Input label="To" />
        </DatepickerWrapper>
      </Wrapper>
    </>
  );
};

export default Datepicker;
