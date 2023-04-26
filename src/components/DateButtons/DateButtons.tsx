import React, { FC } from 'react';
import { Week, WeekDay } from './styled';

interface AllDays {
  currentYear: number;
  currentMonth: number;
  currentDate: number;
}

interface DateButtonsProps {
  dateFrom: Date;
  dateTo: Date;
  allDays: Array<AllDays>;
  onDateChange: (date: Date) => void;
}

const DateButtons: FC<DateButtonsProps> = ({ dateFrom, dateTo, allDays, onDateChange }) => {
  const getMode = (date: Date) => {
    if (dateFrom.getTime() === date.getTime()) {
      return 'selectedFrom';
    }
    if (dateTo.getTime() === date.getTime()) {
      return 'selectedTo';
    }
    if (date > dateFrom && date < dateTo) {
      return 'inRange';
    }
    return '';
  };

  const handleButtonClick = (date: Date) => {
    onDateChange(date);
  };

  return (
    <Week>
      {allDays.map(({ currentYear, currentMonth, currentDate }) => {
        const date = new Date(currentYear, currentMonth, currentDate);
        return (
          <WeekDay
            key={`${currentYear}-${currentMonth}-${currentDate}`}
            onClick={() => handleButtonClick(date)}
            mode={getMode(date)}
          >
            {currentDate}
          </WeekDay>
        );
      })}
    </Week>
  );
};

export default DateButtons;
