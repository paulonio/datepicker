import React, { FC } from 'react';
import { Week, WeekDay } from './styled';
import calendar from '@utils/ClassCalendar';
import { useDisplayDates } from '@hooks/useDisplayDates';
import type { DatepickerProps } from '@components/Datepicker/Datepicker';
import type { Init, Action } from '@/types/types';

interface DateButtonsProps {
  state: Init;
  dispatch: (action: Action) => void;
  config: DatepickerProps;
  newDate: Date;
  selectOneDate: boolean;
  selectedDate: Date;
  setSelectOneDate: (value: boolean) => void;
  selectDate: (date: Date) => void;
}

const DateButtons: FC<DateButtonsProps> = ({
  state,
  dispatch,
  config,
  newDate,
  selectOneDate,
  selectedDate,
  selectDate,
  setSelectOneDate,
}) => {
  const today = calendar.getToday();
  const { currentCalendar } = state;
  const { start: mode, view, weekend, minDate, maxDate } = config;
  const allDays = useDisplayDates(mode, view, newDate);

  const handleButtonClick = (date: Date) => {
    if (selectOneDate) {
      selectDate(date);
      setSelectOneDate(true);
    } else {
      const type = currentCalendar === 'From' ? 'SET_DATE_FROM' : 'SET_DATE_TO';
      dispatch({ type, payload: { date } });
      dispatch({ type: 'TOGGLE_CALENDAR', payload: { showCalendar: false } });
    }
  };

  return (
    <Week>
      {allDays.map(({ currentYear, currentMonth, currentDate, isCurrentMonth }) => {
        const date = new Date(currentYear, currentMonth, currentDate);
        const status = calendar.getMode(date, state, selectOneDate, selectedDate);
        const isToday = today.getTime() === date.getTime();
        const isWeekend = calendar.setWeekendStatus(date);
        const isDisabled = calendar.isValidDate(date, minDate, maxDate);
        const showWeekend = calendar.showWeekend(isWeekend, weekend);
        return (
          <WeekDay
            key={`${currentYear}/${currentMonth}/${currentDate}`}
            onClick={() => handleButtonClick(date)}
            status={status}
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
