import React, { FC } from 'react';
import { Month, MonthWrapper, NextIcon, PrevIcon } from './styled';
import { MONTHS } from '../../constants/constants';

interface MonthRowProps {
  month: number;
  year: number;
  handleMonthChange: (month: number) => void;
  handleYearChange: (year: number) => void;
}

const MonthRow: FC<MonthRowProps> = ({ month, year, handleMonthChange, handleYearChange }) => {
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
        {MONTHS[month]} {year}
      </Month>
      <NextIcon onClick={handleNextClick} />
    </MonthWrapper>
  );
};

export default MonthRow;
