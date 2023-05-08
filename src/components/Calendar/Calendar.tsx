import React, { forwardRef, useState } from 'react';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import MonthRow from '../MonthRow/MonthRow';
import { ClearButton, Wrapper } from './styled';
import DateButtons from '../DateButtons/DateButtons';
import { usePanelDates } from '../../hooks/usePanelDates';
import { useDisplayDates } from '../../hooks/useDisplayDates';
import Modal from '../Modal/Modal';
import type { Action, DatepickerProps, Init } from '../Datepicker/Datepicker';

export interface CalendarProps {
  config: DatepickerProps;
  state: Init;
  dispatch: (action: Action) => void;
}

type Ref = HTMLDivElement;

const Calendar = forwardRef<Ref, CalendarProps>(({ config, state, dispatch }, ref) => {
  const { currentCalendar: fromTo, from: dateFrom, to: dateTo } = state;
  const { start: mode, view, minDate, maxDate } = config;
  const { newDate, setDate } = usePanelDates(fromTo, dateFrom, dateTo);
  const allDays = useDisplayDates(mode, view, newDate);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2023, 4, 1));
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChangeDate = (date: Date) => {
    const type = fromTo === 'From' ? 'SET_DATE_FROM' : 'SET_DATE_TO';
    const action: Action = { type, payload: { date } };
    dispatch(action);
  };

  const toggleCalendar = (showCalendar: boolean) => {
    const action: Action = { type: 'TOGGLE_CALENDAR', payload: { showCalendar } };
    dispatch(action);
  };

  return (
    <>
      <Wrapper ref={ref}>
        <MonthRow type={view} date={newDate} setDate={setDate} />
        <WeekDayRow mode={mode} />
        <DateButtons
          dateFrom={dateFrom}
          dateTo={dateTo}
          allDays={allDays}
          onDateChange={handleChangeDate}
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
});

export default Calendar;
