import React, { FC } from 'react';
import { Month, MonthWrapper, NextIcon, PrevIcon, PrevYearIcon, NextYearIcon } from './styled';
import { useMonthChangeHandlers } from '../../hooks/useMonthChangeHandlers';
import type { View } from '../Datepicker/Datepicker';
import { MONTHS } from '../../constants/constants';

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
      <PrevYearIcon onClick={handlePrevYearClick} />
      <PrevIcon onClick={handlePrevClick} />
      <Month>
        {MONTHS[date.getMonth()]} {`${date.getFullYear()}`}
      </Month>
      <NextIcon onClick={handleNextClick} />
      <NextYearIcon onClick={handleNextYearClick} />
    </MonthWrapper>
  );
};

export default MonthRow;
