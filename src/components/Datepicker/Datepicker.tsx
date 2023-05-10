import React, { FC, useRef } from 'react';
import { DatepickerWrapper } from './styled';
import Global from '../../styles/Global';
import Input from '../Input/Input';
import Calendar from '../Calendar/Calendar';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useDatepickerState } from '../../hooks/useDatepickerState';
import type { Mode, View, WeekendStatus } from '../../types/types';

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
        <Input label="From" date={state.from} dispatch={dispatch} />
        <Input label="To" date={state.to} dispatch={dispatch} />
        {state.showCalendar && (
          <Calendar
            ref={calendarRef}
            config={initial}
            state={state}
            dispatch={dispatch}
            data-component="calendar"
          />
        )}
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
