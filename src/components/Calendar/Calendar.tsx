import React from 'react';
import {
  ClearButton,
  Month,
  MonthWrapper,
  NextIcon,
  PrevIcon,
  Week,
  WeekDay,
  Wrapper,
} from './styled';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import ClassCalendar from '../../utils/ClassCalendar';
import { getAllDaysInMonth, getNextMonthDates, getPreviousMonthDates } from '../../utils/utils';

const Calendar = () => {
  const calendar = new ClassCalendar(
    new Date(2023, 3, 24),
    new Date(2023, 3, 25),
    new Date(2023, 3, 24)
  );

  const daysInCurrentMonth = getAllDaysInMonth(calendar.getAmountCurrentMonthDays());
  const daysInPreviousMonth = getPreviousMonthDates(
    calendar.getAmountPreviosMonthDays(),
    calendar.getFirstDayInMonth()
  );
  const daysInNextMonth = getNextMonthDates(daysInCurrentMonth.length, daysInPreviousMonth.length);
  const allDays = [...daysInPreviousMonth, ...daysInCurrentMonth, ...daysInNextMonth];
  const currentMonth = calendar.getCurrentMonth();
  const currentYear = calendar.getCurrentYear();

  return (
    <Wrapper>
      <MonthWrapper>
        <PrevIcon />
        <Month>
          {currentMonth} {currentYear}
        </Month>
        <NextIcon />
      </MonthWrapper>
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
