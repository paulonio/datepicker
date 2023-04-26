import React, { useState } from 'react';
import { DatepickerWrapper } from './styled';
import Global from '../../styles/Global';
import Input from '../Input/Input';
import Calendar from '../Calendar/Calendar';
import ClassCalendar from '../../utils/ClassCalendar';

const calendarInstance = new ClassCalendar(new Date(2023, 3, 24));

const Datepicker = () => {
  const [dateFrom, setDateFrom] = useState<Date>(calendarInstance.currentDate);
  const [dateTo, setDateTo] = useState<Date>(calendarInstance.currentDate);
  const [currentCalendar, setCurrentCalendar] = useState<'From' | 'To'>('From');

  return (
    <>
      <Global />
      <DatepickerWrapper>
        <Input
          label="From"
          date={dateFrom}
          onDateChange={setDateFrom}
          setCurrentCalendar={setCurrentCalendar}
        />
        <Input
          label="To"
          date={dateTo}
          onDateChange={setDateTo}
          setCurrentCalendar={setCurrentCalendar}
        />
        <Calendar
          fromTo={currentCalendar}
          dateFrom={dateFrom}
          dateTo={dateTo}
          onDateFromChange={setDateFrom}
          onDateToChange={setDateTo}
        />
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
