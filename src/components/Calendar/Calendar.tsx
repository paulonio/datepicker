import React, { FC } from 'react';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import MonthRow from '../MonthRow/MonthRow';
import { ClearButton, Wrapper } from './styled';
import DateButtons from '../DateButtons/DateButtons';
import { usePanelDates } from '../../hooks/usePanelDates';
import { useDisplayDates } from '../../hooks/useDisplayDates';

export interface CalendarProps {
  fromTo: 'From' | 'To';
  dateFrom: Date;
  dateTo: Date;
  onDateFromChange: (date: Date) => void;
  onDateToChange: (date: Date) => void;
}

const Calendar: FC<CalendarProps> = ({
  fromTo,
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
}) => {
  const { month, year, setMonth, setYear } = usePanelDates(fromTo, dateFrom, dateTo);
  const allDays = useDisplayDates(month, year);

  return (
    <Wrapper>
      <MonthRow month={month} year={year} handleMonthChange={setMonth} handleYearChange={setYear} />
      <WeekDayRow />
      <DateButtons
        dateFrom={dateFrom}
        dateTo={dateTo}
        allDays={allDays}
        onDateChange={fromTo === 'From' ? onDateFromChange : onDateToChange}
      />
      <ClearButton>Clear</ClearButton>
    </Wrapper>
  );
};

export default Calendar;
