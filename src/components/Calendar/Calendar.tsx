import React, { forwardRef } from 'react';

import type { DatepickerProps } from '@components/Datepicker/Datepicker';
import WeekDayRow from '@components/WeekDayRow/WeekDayRow';
import MonthRow from '@components/MonthRow/MonthRow';
import DateButtons from '@components/DateButtons/DateButtons';

import { usePanelDates } from '@hooks/usePanelDates';
import type { Action, Init } from '@/types/types';

import { CalendarWrapper, ClearButton, Wrapper } from './styled';

export interface CalendarProps {
  config: DatepickerProps;
  state: Init;
  dispatch: (action: Action) => void;
}

type Ref = HTMLDivElement;

const Calendar = forwardRef<Ref, CalendarProps>(({ config, state, dispatch }, ref) => {
  const { currentCalendar, from, to, date } = state;
  const { start, view, weekend } = config;
  const { newDate, setDate } = usePanelDates(currentCalendar, from, to, date);

  const handleClearInputs = () => {
    const action: Action = { type: 'CLEAR_INPUTS' };
    dispatch(action);
  };

  return (
    <Wrapper ref={ref} currentCalendar={currentCalendar}>
      <CalendarWrapper>
        <MonthRow type={view} date={newDate} setDate={setDate} />
        <WeekDayRow mode={start} weekendStatus={weekend} />
        <DateButtons state={state} dispatch={dispatch} config={config} newDate={newDate} />
        <ClearButton onClick={handleClearInputs}>Clear</ClearButton>
      </CalendarWrapper>
    </Wrapper>
  );
});

export default Calendar;
