import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import type { DatepickerProps } from '@components/Datepicker/Datepicker';
import Calendar from './Calendar';
import type { Init } from '@/types/types';

describe('Calendar', () => {
  const config: DatepickerProps = {
    start: 'mo',
    view: 'monthly',
    weekend: 'show',
    mode: 'range',
    minDate: new Date(2022, 4, 11),
    maxDate: new Date(2024, 4, 11),
  };

  const state: Init = {
    currentCalendar: 'From',
    showCalendar: true,
    date: new Date(2023, 4, 16),
    from: new Date(2023, 4, 2),
    to: new Date(2023, 4, 30),
  };

  it('should render correctly calendar', () => {
    render(<Calendar config={config} state={state} dispatch={() => {}} />);

    const title = screen.getByTestId('month-row');
    expect(title).toHaveTextContent('May 2023');
  });
});
