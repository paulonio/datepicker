import React, { FC } from 'react';

import { MONDAY_STARTS, SUNDAY_STARTS } from '@constants/constants';
import calendar from '@utils/ClassCalendar';
import type { Mode, WeekendStatus } from '@/types/types';

import { WeekDay, WeekWrapper } from './styled';

interface WeekDayRowProps {
  mode: Mode;
  weekendStatus: WeekendStatus;
}

const WeekDayRow: FC<WeekDayRowProps> = ({ mode, weekendStatus }) => {
  const row = mode === 'su' ? SUNDAY_STARTS : MONDAY_STARTS;

  return (
    <WeekWrapper>
      {row.map((day) => {
        const showWeekend = calendar.showWeekendTitle(day, weekendStatus);
        return (
          <WeekDay key={day} showWeekend={showWeekend} data-testid="week-day">
            {day}
          </WeekDay>
        );
      })}
    </WeekWrapper>
  );
};

export default WeekDayRow;
