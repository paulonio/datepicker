import React, { FC } from 'react';
import { MONDAY_STARTS, SUNDAY_STARTS } from '@constants/constants';
import { WeekDay, WeekWrapper } from './styled';
import { Mode } from '@/types/types';

interface WeekDayRowProps {
  mode: Mode;
}

const WeekDayRow: FC<WeekDayRowProps> = ({ mode }) => {
  const row = mode === 'su' ? SUNDAY_STARTS : MONDAY_STARTS;

  return (
    <WeekWrapper>
      {row.map((day) => (
        <WeekDay key={day} data-testid="week-day">
          {day}
        </WeekDay>
      ))}
    </WeekWrapper>
  );
};

export default WeekDayRow;
