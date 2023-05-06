import React, { forwardRef, useState } from 'react';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import MonthRow from '../MonthRow/MonthRow';
import { ClearButton, Wrapper } from './styled';
import DateButtons from '../DateButtons/DateButtons';
import { usePanelDates } from '../../hooks/usePanelDates';
import { useDisplayDates } from '../../hooks/useDisplayDates';
import { Mode } from '../../utils/ClassCalendar';
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

type Ref = HTMLDivElement;

const Calendar = forwardRef<Ref, CalendarProps>(
  (
    {
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
    },
    ref
  ) => {
    const { newDate, setDate } = usePanelDates(fromTo, dateFrom, dateTo);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2023, 4, 1));
    const [showModal, setShowModal] = useState<boolean>(false);
    const allDays = useDisplayDates(mode, view, newDate);

    return (
      <>
        <Wrapper ref={ref}>
          <MonthRow type={view} date={newDate} setDate={setDate} />
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
  }
);

export default Calendar;
