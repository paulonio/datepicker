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
  minDate?: Date;
  maxDate?: Date;
}

const Calendar: FC<CalendarProps> = ({
  fromTo,
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
  toggleCalendar,
  minDate,
  maxDate,
}) => {
  const type = 'week';
  const { day, month, year, setMonth, setYear } = usePanelDates(fromTo, dateFrom, dateTo);

  if (type === 'week') {
    const allDays = useDisplayDates('week', day, month, year);
    return (
      <Wrapper>
        <MonthRow
          day={day}
          month={month}
          year={year}
          handleMonthChange={setMonth}
          handleYearChange={setYear}
        />
        <WeekDayRow />
        <DateButtons
          dateFrom={dateFrom}
          dateTo={dateTo}
          allDays={allDays}
          onDateChange={fromTo === 'From' ? onDateFromChange : onDateToChange}
          toggleCalendar={toggleCalendar}
          minDate={minDate}
          maxDate={maxDate}
        />
        <ClearButton>Clear</ClearButton>
      </Wrapper>
    );
  }

  const allDays = useDisplayDates('', day, month, year);

  return (
    <Wrapper>
      <MonthRow
        day={day}
        month={month}
        year={year}
        handleMonthChange={setMonth}
        handleYearChange={setYear}
      />
      <WeekDayRow />
      <DateButtons
        dateFrom={dateFrom}
        dateTo={dateTo}
        allDays={allDays}
        onDateChange={fromTo === 'From' ? onDateFromChange : onDateToChange}
        toggleCalendar={toggleCalendar}
        minDate={minDate}
        maxDate={maxDate}
      />
      <ClearButton>Clear</ClearButton>
    </Wrapper>
  );
};

export default Calendar;
