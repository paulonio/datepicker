import React, { FC } from 'react';
import { Week, WeekDay } from './styled';
import { DisplayDate } from '../../utils/utils';

interface DateButtonsProps {
  dateFrom: Date | null;
  dateTo: Date | null;
  allDays: Array<DisplayDate>;
  onDateChange: (date: Date) => void;
  toggleCalendar: (bool: boolean) => void;
  minDate?: Date;
  maxDate?: Date;
  selectDate: (date: Date) => void;
  toggleModal: (value: boolean) => void;
}

export const getToday = (): Date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const isValidDate = (date: Date, minDate?: Date, maxDate?: Date) => {
  if (!minDate && !maxDate) {
    return false;
  }
  if (!minDate && maxDate && date >= maxDate) {
    return true;
  }
  if (!maxDate && minDate && date <= minDate) {
    return true;
  }
  if ((minDate && date <= minDate) || (maxDate && date >= maxDate)) {
    return true;
  }
  return false;
};

const DateButtons: FC<DateButtonsProps> = ({
  dateFrom,
  dateTo,
  allDays,
  onDateChange,
  toggleCalendar,
  minDate,
  maxDate,
  selectDate,
  toggleModal,
}) => {
  const today = getToday();

  const getMode = (date: Date) => {
    if (dateFrom && dateFrom.getTime() === date.getTime()) {
      return 'selectedFrom';
    }
    if (dateTo && dateTo.getTime() === date.getTime()) {
      return 'selectedTo';
    }
    if (dateFrom && dateTo && date > dateFrom && date < dateTo) {
      return 'inRange';
    }
    return '';
  };

  const handleButtonClick = (date: Date) => {
    onDateChange(date);
    toggleCalendar(false);
  };

  const handleToggleModal = (date: Date) => {
    selectDate(date);
    toggleModal(true);
  };

  return (
    <Week>
      {allDays.map(({ currentYear, currentMonth, currentDate, isCurrentMonth }) => {
        const date = new Date(currentYear, currentMonth, currentDate);
        const mode = getMode(date);
        const isDisabled = isValidDate(date, minDate, maxDate);
        return (
          <WeekDay
            key={`${currentYear}-${currentMonth}-${currentDate}`}
            // onClick={() => handleButtonClick(date)}
            onDoubleClick={() => handleToggleModal(date)}
            mode={mode}
            isCurrentMonth={isCurrentMonth}
            isToday={today.getTime() === date.getTime()}
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
