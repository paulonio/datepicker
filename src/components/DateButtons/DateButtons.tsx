import React, { FC } from 'react';
import { Week, WeekDay } from './styled';
import { DisplayDate } from '../../utils/utils';

interface DateButtonsProps {
  dateFrom: Date;
  dateTo: Date;
  allDays: Array<DisplayDate>;
  onDateChange: (date: Date) => void;
}

const getToday = (): Date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const DateButtons: FC<DateButtonsProps> = ({ dateFrom, dateTo, allDays, onDateChange }) => {
  const today = getToday();

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
      {allDays.map(({ currentYear, currentMonth, currentDate, isCurrentMonth }) => {
        const date = new Date(currentYear, currentMonth, currentDate);
        const mode = getMode(date);
        return (
          <WeekDay
            key={`${currentYear}-${currentMonth}-${currentDate}`}
            onClick={() => handleButtonClick(date)}
            mode={mode}
            isCurrentMonth={isCurrentMonth}
            isToday={today.getTime() === date.getTime()}
          >
            {currentDate}
          </WeekDay>
        );
      })}
    </Week>
  );
};

export default DateButtons;
