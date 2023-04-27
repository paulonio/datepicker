import React, { FC } from 'react';
import { Week, WeekDay } from './styled';
import { DisplayDate } from '../../utils/utils';

interface DateButtonsProps {
  dateFrom: Date | null;
  dateTo: Date | null;
  allDays: Array<DisplayDate>;
  onDateChange: (date: Date) => void;
  toggleCalendar: (bool: boolean) => void;
}

export const getToday = (): Date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const DateButtons: FC<DateButtonsProps> = ({
  dateFrom,
  dateTo,
  allDays,
  onDateChange,
  toggleCalendar,
}) => {
  const today = getToday();

  const getMode = (date: Date) => {
    if (dateFrom && dateFrom.getTime() === date.getTime()) {
      return 'selectedFrom';
    }
    if (dateTo && dateTo.getTime() === date.getTime()) {
      return 'selectedTo';
    }
    if (dateFrom && dateTo && date > dateFrom && date < dateTo) {
      return 'inRange';
    }
    return '';
  };

  const handleButtonClick = (date: Date) => {
    onDateChange(date);
    toggleCalendar(false);
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
