import React, { forwardRef, useState } from 'react';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import MonthRow from '../MonthRow/MonthRow';
import { ClearButton, Wrapper } from './styled';
import DateButtons from '../DateButtons/DateButtons';
import { usePanelDates } from '../../hooks/usePanelDates';
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
  const { start: mode, view } = config;
  const { newDate, setDate } = usePanelDates(fromTo, dateFrom, dateTo);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2023, 4, 1));
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Wrapper ref={ref}>
        <MonthRow type={view} date={newDate} setDate={setDate} />
        <WeekDayRow mode={mode} />
        <DateButtons
          state={state}
          dispatch={dispatch}
          config={config}
          newDate={newDate}
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
