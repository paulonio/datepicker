import React, { ChangeEvent, forwardRef, useState } from 'react';

import type { DatepickerProps } from '@components/Datepicker/Datepicker';
import WeekDayRow from '@components/WeekDayRow/WeekDayRow';
import MonthRow from '@components/MonthRow/MonthRow';
import DateButtons from '@components/DateButtons/DateButtons';
import Modal from '@components/Modal/Modal';

import { usePanelDates } from '@hooks/usePanelDates';
import type { Action, Init } from '@/types/types';

import { CalendarWrapper, Checkbox, ClearButton, Label, Wrapper } from './styled';

export interface CalendarProps {
  config: DatepickerProps;
  state: Init;
  dispatch: (action: Action) => void;
}

type Ref = HTMLDivElement;

const Calendar = forwardRef<Ref, CalendarProps>(({ config, state, dispatch }, ref) => {
  const { currentCalendar, from, to } = state;
  const { start, view, weekend } = config;
  const { newDate, setDate } = usePanelDates(currentCalendar, from, to);
  const [selectOneDate, setSelectOneDate] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2023, 4, 1));

  const handleModeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setSelectOneDate(isChecked);
  };

  const handleClearInputs = () => {
    const action: Action = { type: 'CLEAR_INPUTS' };
    dispatch(action);
  };

  return (
    <Wrapper ref={ref}>
      <CalendarWrapper>
        <Label>
          <Checkbox onChange={handleModeChange} data-testid="checkbox" />
          Select one date
        </Label>
        <MonthRow type={view} date={newDate} setDate={setDate} />
        <WeekDayRow mode={start} weekendStatus={weekend} />
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
        <ClearButton onClick={handleClearInputs}>Clear</ClearButton>
      </CalendarWrapper>
      {selectOneDate && <Modal date={selectedDate} handleCloseModal={setSelectOneDate} />}
    </Wrapper>
  );
});

export default Calendar;
