import React, { FC, useEffect, useState } from 'react';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import MonthRow from '../MonthRow/MonthRow';
import { ClearButton, Wrapper } from './styled';
import DateButtons from '../DateButtons/DateButtons';

interface CalendarProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

const Calendar: FC<CalendarProps> = ({ date, onDateChange }) => {
  const [month, setMonth] = useState<number>(date.getMonth());
  const [year, setYear] = useState<number>(date.getFullYear());
  const day = date.getDate();

  useEffect(() => {
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }, [date]);

  return (
    <Wrapper>
      <MonthRow month={month} year={year} handleMonthChange={setMonth} handleYearChange={setYear} />
      <WeekDayRow />
      <DateButtons day={day} month={month} year={year} onChange={onDateChange} />
      <ClearButton>Clear</ClearButton>
    </Wrapper>
  );
};

export default Calendar;
