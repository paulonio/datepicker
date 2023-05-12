import React, { FC } from 'react';
import { useMonthChangeHandlers } from '@hooks/useMonthChangeHandlers';
import { MONTHS } from '@constants/constants';
import { Month, MonthWrapper, NextIcon, PrevIcon, PrevYearIcon, NextYearIcon } from './styled';
import type { View } from '@/types/types';

interface MonthRowProps {
  type: View;
  date: Date;
  setDate: (date: Date) => void;
}

const MonthRow: FC<MonthRowProps> = ({ type, date, setDate }) => {
  const { handlePrevClick, handleNextClick, handleNextYearClick, handlePrevYearClick } =
    useMonthChangeHandlers(type, date, setDate);

  return (
    <MonthWrapper>
      <PrevYearIcon onClick={handlePrevYearClick} data-testid="prev-year" />
      <PrevIcon onClick={handlePrevClick} data-testid="prev" />
      <Month data-testid="month-row">
        {MONTHS[date.getMonth()]} {`${date.getFullYear()}`}
      </Month>
      <NextIcon onClick={handleNextClick} data-testid="next" />
      <NextYearIcon onClick={handleNextYearClick} data-testid="next-year" />
    </MonthWrapper>
  );
};

export default MonthRow;
