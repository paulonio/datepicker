import React from 'react';
import { render, screen } from '@testing-library/react';
import Datepicker from './Datepicker';

describe('Datepicker', () => {
  const minDate = new Date(2021, 4, 5);
  const maxDate = new Date(2025, 4, 25);

  it('should render datepicker component', () => {
    const { container } = render(
      <Datepicker start="mo" view="monthly" weekend="show" minDate={minDate} maxDate={maxDate} />
    );

    expect(container).toMatchSnapshot();
  });

  it('should display 2 inputs', () => {
    render(
      <Datepicker start="mo" view="monthly" weekend="show" minDate={minDate} maxDate={maxDate} />
    );

    const inputs = screen.getAllByTestId('input');
    expect(inputs).toHaveLength(2);
  });
});
