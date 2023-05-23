import { useReducer } from 'react';

import type { Action, Init } from '@/types/types';

export const useDatepickerState = () => {
  const initialValue: Init = {
    from: null,
    to: null,
    date: null,
    currentCalendar: 'From',
    showCalendar: false,
  };

  const reducer = (state: Init, action: Action) => {
    switch (action.type) {
      case 'SET_DATE_FROM':
        if (action.payload.date && state.to && action.payload.date > state.to) {
          return state;
        }
        return { ...state, from: action.payload.date };
      case 'SET_DATE_TO':
        if (action.payload.date && state.from && action.payload.date < state.from) {
          return state;
        }
        return { ...state, to: action.payload.date };
      case 'SET_DATE':
        return { ...state, date: action.payload.date };
      case 'SET_CURRENT_CALENDAR':
        return { ...state, currentCalendar: action.payload.calendar };
      case 'TOGGLE_CALENDAR':
        return { ...state, showCalendar: action.payload.showCalendar };
      case 'CLEAR_INPUTS':
        return { ...state, from: null, to: null, date: null };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return { state, dispatch };
};
