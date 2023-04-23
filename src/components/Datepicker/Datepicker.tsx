import React from 'react';
import { DatepickerWrapper } from './styled';
import Global from '../../styles/Global';
import Input from '../Input/Input';

const Datepicker = () => {
  return (
    <>
      <Global />
      <DatepickerWrapper>
        <Input label="From" />
        <Input label="To" />
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
