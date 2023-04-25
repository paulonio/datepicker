import React, { FC, useState } from 'react';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import MonthRow from '../MonthRow/MonthRow';
import { ClearButton, Week, WeekDay, Wrapper } from './styled';
import { useDisplayDates } from '../../hooks/useDisplayDates';

interface CalendarProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

const Calendar: FC<CalendarProps> = ({ date, onDateChange }) => {
  const [month, setMonth] = useState<number>(() => date.getMonth());
  const [year, setYear] = useState<number>(() => date.getFullYear());
  const allDays = useDisplayDates(month, year);

  return (
    <Wrapper>
      <MonthRow month={month} year={year} handleMonthChange={setMonth} handleYearChange={setYear} />
      <WeekDayRow />
      <Week>
        {allDays.map((data, idx) => (
          <WeekDay key={idx}>{data}</WeekDay>
        ))}
      </Week>
      <ClearButton>Clear</ClearButton>
    </Wrapper>
  );
};

export default Calendar;
