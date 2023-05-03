import React, { FC, useState } from 'react';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import MonthRow from '../MonthRow/MonthRow';
import { ClearButton, Wrapper } from './styled';
import DateButtons from '../DateButtons/DateButtons';
import { usePanelDates } from '../../hooks/usePanelDates';
import { useDisplayDates } from '../../hooks/useDisplayDates';
import { MONTHS } from '../../constants/constants';
import { Mode } from '../../utils/utils';
import Modal from '../Modal/Modal';
import type { View } from '../Datepicker/Datepicker';

export interface CalendarProps {
  mode: Mode;
  view: View;
  fromTo: 'From' | 'To';
  dateFrom: Date | null;
  dateTo: Date | null;
  onDateFromChange: (date: Date | null) => void;
  onDateToChange: (date: Date | null) => void;
  // TODO fix
  toggleCalendar: (bool: boolean) => void;
  minDate?: Date;
  maxDate?: Date;
}

const Calendar: FC<CalendarProps> = ({
  fromTo,
  mode,
  view,
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
  toggleCalendar,
  minDate,
  maxDate,
}) => {
  const { day, month, year, setDay, setMonth, setYear } = usePanelDates(fromTo, dateFrom, dateTo);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2023, 4, 1));
  const [showModal, setShowModal] = useState<boolean>(false);
  const allDays = useDisplayDates(mode, view, day, month, year);

  return (
    <>
      <Wrapper>
        <MonthRow
          type=""
          day={day}
          month={month}
          year={year}
          handleDayChange={setDay}
          handleMonthChange={setMonth}
          handleYearChange={setYear}
        >
          {MONTHS[month]} {year.toString()}
        </MonthRow>
        <WeekDayRow mode={mode} />
        <DateButtons
          dateFrom={dateFrom}
          dateTo={dateTo}
          allDays={allDays}
          onDateChange={fromTo === 'From' ? onDateFromChange : onDateToChange}
          toggleCalendar={toggleCalendar}
          minDate={minDate}
          maxDate={maxDate}
          selectDate={setSelectedDate}
          toggleModal={setShowModal}
        />
        <ClearButton>Clear</ClearButton>
      </Wrapper>
      {showModal && <Modal date={selectedDate} handleCloseModal={setShowModal} />}
    </>
  );
};

export default Calendar;
