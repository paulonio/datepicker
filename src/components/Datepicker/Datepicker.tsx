import React, { useState } from 'react';
import { DatepickerWrapper } from './styled';
import Global from '../../styles/Global';
import Input from '../Input/Input';
import Calendar from '../Calendar/Calendar';
import ClassCalendar from '../../utils/ClassCalendar';

const calendarInstance = new ClassCalendar(new Date(2023, 3, 24));

const Datepicker = () => {
  const [dateFrom, setDateFrom] = useState<Date | null>(calendarInstance.currentDate);
  const [dateTo, setDateTo] = useState<Date | null>(calendarInstance.currentDate);
  const [currentCalendar, setCurrentCalendar] = useState<'From' | 'To'>('From');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  return (
    <>
      <Global />
      <DatepickerWrapper>
        <Input
          label="From"
          date={dateFrom}
          onDateChange={setDateFrom}
          setCurrentCalendar={setCurrentCalendar}
          toggleCalendar={setShowCalendar}
        />
        <Input
          label="To"
          date={dateTo}
          onDateChange={setDateTo}
          setCurrentCalendar={setCurrentCalendar}
          toggleCalendar={setShowCalendar}
        />
        {showCalendar && (
          <Calendar
            fromTo={currentCalendar}
            dateFrom={dateFrom}
            dateTo={dateTo}
            onDateFromChange={setDateFrom}
            onDateToChange={setDateTo}
            toggleCalendar={setShowCalendar}
          />
        )}
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
