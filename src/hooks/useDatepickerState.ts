import { useReducer } from 'react';
import type { Action, Init } from '../types/types';

export const useDatepickerState = () => {
  const initialValue: Init = {
    from: new Date(2022, 5, 17),
    to: new Date(2023, 7, 17),
    currentCalendar: 'From',
    showCalendar: false,
  };

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

  const [state, dispatch] = useReducer(reducer, initialValue);

  return { state, dispatch };
};
