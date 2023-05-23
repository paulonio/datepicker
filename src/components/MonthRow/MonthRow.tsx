import React, { FC } from 'react';

import { useMonthChangeHandlers } from '@hooks/useMonthChangeHandlers';
import { MONTHS } from '@constants/constants';

import PrevYearIcon from '@components/PrevYearIcon/PrevYearIcon';
import PrevIcon from '@components/PrevIcon/PrevIcon';
import NextIcon from '@components/NextIcon/NextIcon';
import NextYearIcon from '@components/NextYearIcon/NextYearIcon';
import type { View } from '@/types/types';

import { IconWrapper, Month, MonthWrapper } from './styled';

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
      <IconWrapper>
        <PrevYearIcon onClick={handlePrevYearClick} data-testid="prev-year" />
      </IconWrapper>
      <IconWrapper>
        <PrevIcon onClick={handlePrevClick} data-testid="prev" />
      </IconWrapper>
      <Month data-testid="month-row">
        {MONTHS[date.getMonth()]} {`${date.getFullYear()}`}
      </Month>
      <IconWrapper>
        <NextIcon onClick={handleNextClick} data-testid="next" />
      </IconWrapper>
      <IconWrapper>
        <NextYearIcon onClick={handleNextYearClick} data-testid="next-year" />
      </IconWrapper>
    </MonthWrapper>
  );
};

export default MonthRow;
