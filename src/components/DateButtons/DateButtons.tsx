import React, { FC } from 'react';
import { Week, WeekDay } from './styled';
import { useDisplayDates } from '../../hooks/useDisplayDates';

interface DateButtonsProps {
  day: number;
  month: number;
  year: number;
  onChange: (date: Date) => void;
}

const DateButtons: FC<DateButtonsProps> = ({ day, month, year, onChange }) => {
  const allDays = useDisplayDates(month, year);

  const isSelected = (date: Date) => {
    if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
      return true;
    }
    return false;
  };

  const handleButtonClick = (date: Date) => {
    onChange(date);
  };

  return (
    <Week>
      {allDays.map(({ currentYear, currentMonth, currentDate }) => {
        const date = new Date(currentYear, currentMonth, currentDate);
        return (
          <WeekDay
            key={`${currentYear}-${currentMonth}-${currentDate}`}
            onClick={() => handleButtonClick(date)}
            selected={isSelected(date)}
          >
            {currentDate}
          </WeekDay>
        );
      })}
    </Week>
  );
};

export default DateButtons;
