import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import type { DatepickerProps } from '@components/Datepicker/Datepicker';
import Calendar from './Calendar';
import type { Init } from '@/types/types';

describe('Calendar', () => {
  const config: DatepickerProps = {
    start: 'mo',
    view: 'monthly',
    weekend: 'show',
    minDate: new Date(2022, 4, 11),
    maxDate: new Date(2024, 4, 11),
  };

  const stateMock: Init = {
    currentCalendar: 'From',
    showCalendar: true,
    from: new Date(2023, 4, 2),
    to: new Date(2023, 4, 30),
  };

  it('should render calendar', () => {
    const { container } = render(
      <Calendar config={config} state={stateMock} dispatch={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });
});
