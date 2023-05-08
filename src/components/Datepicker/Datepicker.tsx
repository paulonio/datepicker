import React, { FC, useRef, useReducer } from 'react';
import { DatepickerWrapper } from './styled';
import Global from '../../styles/Global';
import Input from '../Input/Input';
import Calendar from '../Calendar/Calendar';
import { Mode } from '../../utils/ClassCalendar';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export type View = 'weekly' | 'monthly';

export interface DatepickerProps {
  start: Mode;
  view: View;
  maxDate: Date;
  minDate: Date;
}

export const init: DatepickerProps = {
  start: 'mo',
  view: 'monthly',
  minDate: new Date(2021, 3, 2),
  maxDate: new Date(2025, 4, 25),
};

export interface Init {
  from: Date | null;
  to: Date | null;
  currentCalendar: 'From' | 'To';
  showCalendar: boolean;
}

const initialValue: Init = {
  from: new Date(2022, 5, 17),
  to: new Date(2023, 7, 17),
  currentCalendar: 'From',
  showCalendar: false,
};

export type Action =
  | { type: 'SET_DATE_FROM'; payload: { date: Date | null } }
  | { type: 'SET_DATE_TO'; payload: { date: Date | null } }
  | { type: 'SET_CURRENT_CALENDAR'; payload: { calendar: 'From' | 'To' } }
  | { type: 'TOGGLE_CALENDAR'; payload: { showCalendar: boolean } };

const reducer = (state: Init, action: Action) => {
  switch (action.type) {
    case 'SET_DATE_FROM':
      return { ...state, from: action.payload.date };
    case 'SET_DATE_TO':
      return { ...state, to: action.payload.date };
    case 'SET_CURRENT_CALENDAR':
      return { ...state, currentCalendar: action.payload.calendar };
    case 'TOGGLE_CALENDAR':
      return { ...state, showCalendar: action.payload.showCalendar };
    default:
      return state;
  }
};

const Datepicker: FC<DatepickerProps> = ({ ...initial }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
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
