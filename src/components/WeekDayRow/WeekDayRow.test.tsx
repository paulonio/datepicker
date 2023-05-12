import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeekDayRow from '@components/WeekDayRow/WeekDayRow';

describe('WeekDayRow', () => {
  it('should render WeekDayRow component and starts on monday', () => {
    const { container } = render(<WeekDayRow mode="mo" weekendStatus="show" />);

    expect(container).toMatchSnapshot();
    const firstWeekDay = screen.getAllByTestId('week-day')[0];
    expect(firstWeekDay).toHaveTextContent('Mo');
  });

  it('should render WeekDayRow component and starts on sunday', () => {
    render(<WeekDayRow mode="su" weekendStatus="show" />);

    const firstWeekDay = screen.getAllByTestId('week-day')[0];
    expect(firstWeekDay).toHaveTextContent('Su');
  });
});
