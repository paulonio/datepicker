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
  selectDate: (date: Date) => void;
  toggleModal: (value: boolean) => void;
}

const getMode = (date: Date, selectedDates: Init) => {
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
  selectDate,
  toggleModal,
}) => {
  const today = calendar.getToday();
  const { currentCalendar } = state;
  const { start: mode, view, minDate, maxDate } = config;
  const allDays = useDisplayDates(mode, view, newDate);

  const handleButtonClick = (date: Date) => {
    const type = currentCalendar === 'From' ? 'SET_DATE_FROM' : 'SET_DATE_TO';
    dispatch({ type, payload: { date } });
    dispatch({ type: 'TOGGLE_CALENDAR', payload: { showCalendar: false } });
  };

  const handleToggleModal = (date: Date) => {
    selectDate(date);
    toggleModal(true);
  };

  return (
    <Week>
      {allDays.map(({ currentYear, currentMonth, currentDate, isCurrentMonth }) => {
        const date = new Date(currentYear, currentMonth, currentDate);
        const status = getMode(date, state);
        const isToday = today.getTime() === date.getTime();
        const isWeekend = calendar.setWeekendStatus(date);
        const isDisabled = calendar.isValidDate(date, minDate, maxDate);
        return (
          <WeekDay
            key={`${currentYear}/${currentMonth}/${currentDate}`}
            onClick={() => handleButtonClick(date)}
            onDoubleClick={() => handleToggleModal(date)}
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
