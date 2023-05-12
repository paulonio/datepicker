import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Datepicker from '@components/Datepicker/Datepicker';

describe('Datepicker', () => {
  const minDate = new Date(2023, 4, 5);
  const maxDate = new Date(2023, 4, 25);

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

  it('should show calendar on input focus and hide on outside click', () => {
    render(
      <Datepicker start="mo" view="monthly" weekend="show" minDate={minDate} maxDate={maxDate} />
    );

    const input = screen.getAllByTestId('input');
    fireEvent.focus(input[0]);
    const calendar = screen.getByTestId('calendar');
    expect(calendar).toBeInTheDocument();
    fireEvent.click(document.documentElement);
    expect(calendar).not.toBeInTheDocument();
  });

  it('should not save input date when date is smaller then min date', () => {
    render(
      <Datepicker start="mo" view="monthly" weekend="show" minDate={minDate} maxDate={maxDate} />
    );

    const inputFrom = screen.getAllByTestId('input')[0] as HTMLInputElement;
    fireEvent.change(inputFrom, { target: { value: '04/05/2022' } });
    fireEvent.blur(inputFrom);
    expect(inputFrom.value).toBe('');
  });

  it('should not save input date when date is bigger then max date', () => {
    render(
      <Datepicker start="mo" view="monthly" weekend="show" minDate={minDate} maxDate={maxDate} />
    );

    const inputFrom = screen.getAllByTestId('input')[0] as HTMLInputElement;
    fireEvent.change(inputFrom, { target: { value: '04/05/2024' } });
    fireEvent.blur(inputFrom);
    expect(inputFrom.value).toBe('');
  });

  it('should have disabled buttons if the date is smaller then min date', () => {
    render(
      <Datepicker start="mo" view="monthly" weekend="show" minDate={minDate} maxDate={maxDate} />
    );

    const input = screen.getAllByTestId('input')[0] as HTMLInputElement;
    fireEvent.focus(input);
    const prevYearButton = screen.getByTestId('prev-year');
    fireEvent.click(prevYearButton);
    const dateButtons = screen.getAllByTestId('date-button');
    expect(dateButtons).toHaveLength(42);
    const singleButton = dateButtons[0];
    expect(singleButton).toBeDisabled();
  });

  it('should have disabled buttons if the date is smaller then min date', () => {
    render(
      <Datepicker start="mo" view="monthly" weekend="show" minDate={minDate} maxDate={maxDate} />
    );

    const input = screen.getAllByTestId('input')[0] as HTMLInputElement;
    fireEvent.focus(input);
    const prevYearButton = screen.getByTestId('next-year');
    fireEvent.click(prevYearButton);
    const dateButtons = screen.getAllByTestId('date-button');
    expect(dateButtons).toHaveLength(42);
    const singleButton = dateButtons[0];
    expect(singleButton).toBeDisabled();
  });
});
