import React, { useState } from 'react';
import { DatepickerWrapper } from './styled';
import Global from '../../styles/Global';
import Input from '../Input/Input';
import Calendar from '../Calendar/Calendar';
import ClassCalendar from '../../utils/ClassCalendar';

const calendarInstance = new ClassCalendar(new Date(2023, 3, 24));

const Datepicker = () => {
  const [date, setDate] = useState<Date>(calendarInstance.currentDate);

  return (
    <>
      <Global />
      <DatepickerWrapper>
        <Input label="From" dateFrom={date} onDateChange={setDate} />
        <Input label="To" />
        <Calendar date={date} onDateChange={setDate} />
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
