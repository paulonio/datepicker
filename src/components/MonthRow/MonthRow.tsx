import React, { FC } from 'react';
import { Month, MonthWrapper, NextIcon, PrevIcon, PrevYearIcon, NextYearIcon } from './styled';
import { getAmountDaysInMonth } from '../../utils/utils';

interface MonthRowProps {
  week?: number;
  day: number;
  type: string;
  month: number;
  year: number;
  children: JSX.Element | string | string[];
  handleDayChange: (day: number) => void;
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

const MonthRow: FC<MonthRowProps> = ({
  week,
  day,
  type,
  month,
  year,
  handleDayChange,
  handleMonthChange,
  handleYearChange,
  children,
}) => {
  const handlePreviousClick = () => {
    if (type === 'week') {
      if (day === 7) {
        const date = new Date(year, month, 1);
        date.setMinutes(-1);
        handleDayChange(date.getDate());
        handleMonthChange(date.getMonth());
        handleYearChange(date.getFullYear());
      } else if (day < 7) {
        const date = new Date(year, month, day);
        date.setDate(day - 7);
        handleDayChange(date.getDate());
        handleMonthChange(date.getMonth());
        handleYearChange(date.getFullYear());
      } else if (week === 1) {
        handleDayChange(day - 7);
        handleYearChange(year - 1);
      } else {
        handleDayChange(day - 7);
      }
    } else if (month === 0) {
      handleMonthChange(11);
      handleYearChange(year - 1);
    } else {
      handleMonthChange(month - 1);
    }
  };

  const handleNextClick = () => {
    if (type === 'week') {
      const daysInMonth = getAmountDaysInMonth(month, year);
      if (day + 7 > daysInMonth) {
        const date = new Date(year, month, day);
        date.setDate(day + 7);
        handleDayChange(date.getDate());
        handleMonthChange(date.getMonth());
        handleYearChange(date.getFullYear());
      } else {
        handleDayChange(day + 7);
      }
    } else if (month === 11) {
      handleMonthChange(0);
      handleYearChange(year + 1);
    } else {
      handleMonthChange(month + 1);
    }
  };

  const handleNextYearClick = () => {
    handleYearChange(year + 1);
  };

  const handlePrevYearClick = () => {
    handleYearChange(year - 1);
  };

  return (
    <MonthWrapper>
      <PrevYearIcon onClick={handlePrevYearClick} />
      <PrevIcon onClick={handlePreviousClick} />
      <Month>{children}</Month>
      <NextIcon onClick={handleNextClick} />
      <NextYearIcon onClick={handleNextYearClick} />
    </MonthWrapper>
  );
};

export default MonthRow;
