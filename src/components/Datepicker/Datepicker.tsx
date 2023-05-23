import React, { FC, useRef } from 'react';

import Calendar from '@components/Calendar/Calendar';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import MetaLinks from '@components/MetaLinks/MetaLinks';
import Fallback from '@components/Fallback/Fallback';

import { useOutsideClick } from '@hooks/useOutsideClick';
import { useDatepickerState } from '@hooks/useDatepickerState';
import Global from '@styles/Global';
import DateInputs from '@components/DateInputs/DateInputs';
import Modal from '@components/Modal/Modal';
import type { Mode, View, WeekendStatus } from '@/types/types';

import { DatepickerWrapper } from './styled';

export interface DatepickerProps {
  start: Mode;
  view: View;
  weekend: WeekendStatus;
  mode: 'date' | 'range';
  maxDate: Date;
  minDate: Date;
}

const Datepicker: FC<DatepickerProps> = ({ ...initial }) => {
  const { state, dispatch } = useDatepickerState();
  const calendarRef = useRef<HTMLDivElement>(null);
  const { mode } = initial;

  const handleCloseCalendar = (value: boolean) => {
    dispatch({ type: 'TOGGLE_CALENDAR', payload: { showCalendar: value } });
  };
  useOutsideClick(calendarRef, handleCloseCalendar);

  return (
    <>
      <Global />
      <MetaLinks />
      <DatepickerWrapper>
        <ErrorBoundary fallback={<Fallback />}>
          <DateInputs state={state} config={initial} dispatch={dispatch} />
          {mode === 'date' && <Modal date={state.date} />}
          {state.showCalendar && (
            <Calendar ref={calendarRef} config={initial} state={state} dispatch={dispatch} />
          )}
        </ErrorBoundary>
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
