import React, { FC } from 'react';
import { Week, WeekDay } from './styled';
import calendar from '../../utils/ClassCalendar';
import type { Action, DatepickerProps, Init } from '../Datepicker/Datepicker';
import { useDisplayDates } from '../../hooks/useDisplayDates';

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

const getMode = (date: Date, selectedDates: Init, selectOneDate: boolean, selectedDate: Date) => {
  if (selectOneDate && selectedDate.getTime() === date.getTime()) {
    return 'selectedDate';
  }
  const { from, to } = selectedDates;
  if (from && from.getTime() === date.getTime()) {
    return 'selectedFrom';
  }
  if (to && to.getTime() === date.getTime()) {
    return 'selectedTo';
  }
  if (from && to && date > from && date < to) {
    return 'inRange';
  }
  return '';
};

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
  const { start: mode, view, minDate, maxDate } = config;
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
        const status = getMode(date, state, selectOneDate, selectedDate);
        const isToday = today.getTime() === date.getTime();
        const isWeekend = calendar.setWeekendStatus(date);
        const isDisabled = calendar.isValidDate(date, minDate, maxDate);
        return (
          <WeekDay
            key={`${currentYear}/${currentMonth}/${currentDate}`}
            onClick={() => handleButtonClick(date)}
            status={status}
            isCurrentMonth={isCurrentMonth}
            isToday={isToday}
            isWeekend={isWeekend}
            disabled={isDisabled}
          >
            {currentDate}
          </WeekDay>
        );
      })}
    </Week>
  );
};

export default DateButtons;
