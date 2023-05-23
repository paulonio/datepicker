import React, { FC } from 'react';

import type { DatepickerProps } from '@components/Datepicker/Datepicker';

import calendar from '@utils/ClassCalendar';
import { useDisplayDates } from '@hooks/useDisplayDates';
import type { Init, Action } from '@/types/types';

import { Week, WeekDay } from './styled';

interface DateButtonsProps {
  state: Init;
  dispatch: (action: Action) => void;
  config: DatepickerProps;
  newDate: Date;
}

const DateButtons: FC<DateButtonsProps> = ({ state, dispatch, config, newDate }) => {
  const today = calendar.getToday();
  const { currentCalendar } = state;
  const { start, view, weekend, minDate, maxDate } = config;
  const allDays = useDisplayDates(start, view, newDate);

  const handleButtonClick = (date: Date) => {
    let type: 'SET_DATE' | 'SET_DATE_FROM' | 'SET_DATE_TO';

    switch (currentCalendar) {
      case 'Date':
        type = 'SET_DATE';
        break;
      case 'From':
        type = 'SET_DATE_FROM';
        break;
      case 'To':
        type = 'SET_DATE_TO';
        break;
      default:
        return;
    }

    dispatch({ type, payload: { date } });
    dispatch({ type: 'TOGGLE_CALENDAR', payload: { showCalendar: false } });
  };

  return (
    <Week>
      {allDays.map(({ currentYear, currentMonth, currentDate, isCurrentMonth }) => {
        const date = new Date(currentYear, currentMonth, currentDate);
        const status = calendar.getMode(date, state, currentCalendar);
        const isToday = today.getTime() === date.getTime();
        const isWeekend = calendar.setWeekendStatus(date);
        const isDisabled = calendar.isValidDate(date, minDate, maxDate);
        const showWeekend = calendar.showWeekend(isWeekend, weekend);
        return (
          <WeekDay
            key={`${currentYear}/${currentMonth}/${currentDate}`}
            onClick={() => handleButtonClick(date)}
            status={status}
            currentCalendar={currentCalendar}
            isCurrentMonth={isCurrentMonth}
            isToday={isToday}
            isWeekend={isWeekend}
            showWeekend={showWeekend}
            disabled={isDisabled}
            data-testid="date-button"
          >
            {currentDate}
          </WeekDay>
        );
      })}
    </Week>
  );
};

export default DateButtons;
