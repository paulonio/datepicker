import React, { FC } from 'react';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import MonthRow from '../MonthRow/MonthRow';
import { ClearButton, Wrapper } from './styled';
import DateButtons from '../DateButtons/DateButtons';
import { usePanelDates } from '../../hooks/usePanelDates';
import { useDisplayDates } from '../../hooks/useDisplayDates';

export interface CalendarProps {
  fromTo: 'From' | 'To';
  dateFrom: Date | null;
  dateTo: Date | null;
  onDateFromChange: (date: Date | null) => void;
  onDateToChange: (date: Date | null) => void;
  // TODO fix
  toggleCalendar: (bool: boolean) => void;
}

const Calendar: FC<CalendarProps> = ({
  fromTo,
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
  toggleCalendar,
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
        toggleCalendar={toggleCalendar}
      />
      <ClearButton>Clear</ClearButton>
    </Wrapper>
  );
};

export default Calendar;
