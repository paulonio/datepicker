import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import type { DatepickerProps } from '@components/Datepicker/Datepicker';
import DateButtons from '@components/DateButtons/DateButtons';
import type { Init } from '@/types/types';

describe('DateButtons component', () => {
  const config: DatepickerProps = {
    start: 'mo',
    view: 'monthly',
    weekend: 'show',
    minDate: new Date(2022, 4, 11),
    maxDate: new Date(2024, 4, 11),
  };

  const state: Init = {
    currentCalendar: 'From',
    showCalendar: true,
    from: null,
    to: null,
  };

  const initialDate = new Date(2023, 4, 11);

  it('should render DateButtons component', () => {
    const { container } = render(
      <DateButtons
        state={state}
        config={config}
        newDate={initialDate}
        selectOneDate={false}
        selectedDate={initialDate}
        selectDate={() => {}}
        setSelectOneDate={() => {}}
        dispatch={() => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should correctly highlight date from and date to', () => {
    const from = new Date(2023, 4, 8);
    const to = new Date(2023, 4, 12);
    const newState = { ...state, from, to };

    const { container } = render(
      <DateButtons
        state={newState}
        config={config}
        newDate={initialDate}
        selectOneDate={false}
        selectedDate={initialDate}
        selectDate={() => {}}
        setSelectOneDate={() => {}}
        dispatch={() => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
