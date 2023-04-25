import React from 'react';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import MonthRow from '../MonthRow/MonthRow';
import ClassCalendar from '../../utils/ClassCalendar';
import { getAllDaysInMonth, getNextMonthDates, getPreviousMonthDates } from '../../utils/utils';
import { ClearButton, Week, WeekDay, Wrapper } from './styled';

const calendar = new ClassCalendar(
  new Date(2023, 3, 24),
  new Date(2023, 3, 25),
  new Date(2023, 3, 24)
);

const Calendar = () => {
  const daysInCurrentMonth = getAllDaysInMonth(calendar.getAmountCurrentMonthDays());
  const daysInPreviousMonth = getPreviousMonthDates(
    calendar.getAmountPreviosMonthDays(),
    calendar.getFirstDayInMonth()
  );
  const daysInNextMonth = getNextMonthDates(daysInCurrentMonth.length, daysInPreviousMonth.length);
  const allDays = [...daysInPreviousMonth, ...daysInCurrentMonth, ...daysInNextMonth];

  return (
    <Wrapper>
      <MonthRow calendar={calendar} />
      <WeekDayRow />
      <Week>
        {allDays.map((date, idx) => (
          <WeekDay key={idx}>{date}</WeekDay>
        ))}
      </Week>
      <ClearButton>Clear</ClearButton>
    </Wrapper>
  );
};

export default Calendar;
