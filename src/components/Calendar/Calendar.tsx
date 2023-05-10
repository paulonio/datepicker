import React, { ChangeEvent, forwardRef, useState } from 'react';
import WeekDayRow from '../WeekDayRow/WeekDayRow';
import MonthRow from '../MonthRow/MonthRow';
import { CalendarWrapper, Checkbox, ClearButton, Label, Wrapper } from './styled';
import DateButtons from '../DateButtons/DateButtons';
import { usePanelDates } from '../../hooks/usePanelDates';
import Modal from '../Modal/Modal';
import type { DatepickerProps } from '../Datepicker/Datepicker';
import type { Action, Init } from '../../types/types';

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
  const [selectOneDate, setSelectOneDate] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2023, 4, 1));

  const handleModeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setSelectOneDate(isChecked);
  };

  return (
    <Wrapper ref={ref}>
      <CalendarWrapper>
        <Label>
          <Checkbox onChange={handleModeChange} />
          Select one date
        </Label>
        <MonthRow type={view} date={newDate} setDate={setDate} />
        <WeekDayRow mode={mode} />
        <DateButtons
          state={state}
          dispatch={dispatch}
          config={config}
          newDate={newDate}
          selectOneDate={selectOneDate}
          selectedDate={selectedDate}
          setSelectOneDate={setSelectOneDate}
          selectDate={setSelectedDate}
        />
        <ClearButton>Clear</ClearButton>
      </CalendarWrapper>
      {selectOneDate && <Modal date={selectedDate} handleCloseModal={setSelectOneDate} />}
    </Wrapper>
  );
});

export default Calendar;
