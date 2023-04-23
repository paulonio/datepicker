import React from 'react';
import { DatepickerWrapper } from './styled';
import Global from '../../styles/Global';
import Input from '../Input/Input';
import Calendar from '../Calendar/Calendar';

const Datepicker = () => {
  return (
    <>
      <Global />
      <DatepickerWrapper>
        <Input label="From" />
        <Input label="To" />
        <Calendar />
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
