import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MonthRow from '@components/MonthRow/MonthRow';

describe('MonthRow', () => {
  const date = new Date(2023, 4, 11);

  it('should render MonthRow', () => {
    const { container } = render(<MonthRow type="monthly" date={date} setDate={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it('should show correct month', () => {
    render(<MonthRow type="monthly" date={date} setDate={() => {}} />);

    const monthRow = screen.getByTestId('month-row');
    expect(monthRow).toHaveTextContent('May 2023');
  });

  it('should correctly set prev month', () => {
    render(<MonthRow type="monthly" date={date} setDate={() => {}} />);

    const prevButton = screen.getByTestId('prev');
    const monthRow = screen.getByTestId('month-row');
    fireEvent.click(prevButton);
    waitFor(async () => {
      await expect(monthRow).toHaveTextContent('April 2023');
    });
  });

  it('should correctly set prev year', () => {
    render(<MonthRow type="monthly" date={date} setDate={() => {}} />);

    const prevYearButton = screen.getByTestId('prev-year');
    const monthRow = screen.getByTestId('month-row');
    fireEvent.click(prevYearButton);
    waitFor(async () => {
      await expect(monthRow).toHaveTextContent('May 2022');
    });
  });

  it('should correctly set next month', () => {
    render(<MonthRow type="monthly" date={date} setDate={() => {}} />);

    const nextButton = screen.getByTestId('next');
    const monthRow = screen.getByTestId('month-row');
    fireEvent.click(nextButton);
    waitFor(async () => {
      await expect(monthRow).toHaveTextContent('June 2023');
    });
  });

  it('should correctly set next year', () => {
    render(<MonthRow type="monthly" date={date} setDate={() => {}} />);

    const nextYearButton = screen.getByTestId('next-year');
    const monthRow = screen.getByTestId('month-row');
    fireEvent.click(nextYearButton);
    waitFor(async () => {
      await expect(monthRow).toHaveTextContent('May 2024');
    });
  });
});
