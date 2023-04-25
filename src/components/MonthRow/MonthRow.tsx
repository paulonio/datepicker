import React, { FC, useState } from 'react';
import { Month, MonthWrapper, NextIcon, PrevIcon } from './styled';
import ClassCalendar from '../../utils/ClassCalendar';
import { MONTHS } from '../../constants/constants';

interface MonthRowProps {
  calendar: ClassCalendar;
}

const MonthRow: FC<MonthRowProps> = ({ calendar }) => {
  const [month, setMonth] = useState<number>(() => calendar.getCurrentMonthIdx());
  const [year, setYear] = useState<number>(() => calendar.getCurrentYear());

  const handlePreviousClick = () => {
    calendar.setPreviousMonth();
    setMonth(calendar.getCurrentMonthIdx());
    setYear(calendar.getCurrentYear());
  };

  const handleNextClick = () => {
    calendar.setNextMonth();
    setMonth(calendar.getCurrentMonthIdx());
    setYear(calendar.getCurrentYear());
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
