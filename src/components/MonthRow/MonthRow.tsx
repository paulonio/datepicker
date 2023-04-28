import React, { FC } from 'react';
import { Month, MonthWrapper, NextIcon, PrevIcon } from './styled';
import { MONTHS } from '../../constants/constants';

interface MonthRowProps {
  day: number;
  month: number;
  year: number;
  handleMonthChange: (month: number) => void;
  handleYearChange: (year: number) => void;
}

export const getWeekNumber = (day: number, month: number, year: number) => {
  const oneDay: number = 24 * 60 * 60 * 1000;
  const firstJan: Date = new Date(year, 0, 1);
  const currentDate: Date = new Date(year, month, day);
  const daysOffset: number = Math.floor((currentDate.getTime() - firstJan.getTime()) / oneDay);
  const weekNumber: number = Math.ceil((currentDate.getDay() + 1 + daysOffset) / 7);
  return weekNumber;
};

const MonthRow: FC<MonthRowProps> = ({ day, month, year, handleMonthChange, handleYearChange }) => {
  const weekNumber = getWeekNumber(day, month, year);

  const handlePreviousClick = () => {
    if (month === 0) {
      handleMonthChange(11);
      handleYearChange(year - 1);
    } else {
      handleMonthChange(month - 1);
    }
  };

  const handleNextClick = () => {
    if (month === 11) {
      handleMonthChange(0);
      handleYearChange(year + 1);
    } else {
      handleMonthChange(month + 1);
    }
  };

  return (
    <MonthWrapper>
      <PrevIcon onClick={handlePreviousClick} />
      <Month>
        {weekNumber} {MONTHS[month]} {year}
      </Month>
      <NextIcon onClick={handleNextClick} />
    </MonthWrapper>
  );
};

export default MonthRow;
