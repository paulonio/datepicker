import React, { FC, useRef } from 'react';
import Global from '@styles/Global';
import Input from '@components/Input/Input';
import Calendar from '@components/Calendar/Calendar';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { useDatepickerState } from '@hooks/useDatepickerState';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Fallback from '@components/Fallback/Fallback';
import type { Mode, View, WeekendStatus } from '@/types/types';
import { DatepickerWrapper } from './styled';

export interface DatepickerProps {
  start: Mode;
  view: View;
  weekend: WeekendStatus;
  maxDate: Date;
  minDate: Date;
}

const Datepicker: FC<DatepickerProps> = ({ ...initial }) => {
  const { state, dispatch } = useDatepickerState();
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleCloseCalendar = (value: boolean) => {
    dispatch({ type: 'TOGGLE_CALENDAR', payload: { showCalendar: value } });
  };
  useOutsideClick(calendarRef, handleCloseCalendar);

  return (
    <>
      <Global />
      <DatepickerWrapper>
        <ErrorBoundary fallback={<Fallback />}>
          <Input label="From" date={state.from} config={initial} dispatch={dispatch} />
          <Input label="To" date={state.to} config={initial} dispatch={dispatch} />
          {state.showCalendar && (
            <Calendar ref={calendarRef} config={initial} state={state} dispatch={dispatch} />
          )}
        </ErrorBoundary>
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
