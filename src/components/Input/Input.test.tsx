import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  const dateMock = new Date(2023, 4, 7);

  it('should render input', () => {
    const { container } = render(<Input label="From" date={dateMock} dispatch={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('should render input with date', () => {
    render(<Input label="From" date={dateMock} dispatch={() => {}} />);
    const input: HTMLInputElement = screen.getByTestId('input');
    expect(input.value).toBe('07/05/2023');
  });

  it('should render empty input', () => {
    render(<Input label="From" date={null} dispatch={() => {}} />);
    const input: HTMLInputElement = screen.getByTestId('input');
    expect(input.value).toBe('');
  });

  it('should clear input', () => {
    render(<Input label="From" date={dateMock} dispatch={() => {}} />);
    const input: HTMLInputElement = screen.getByTestId('input');
    const closeButton = screen.getByTestId('close-icon');
    fireEvent.click(closeButton);
    expect(input.value).toBe('');
  });

  it('should correctly change date in the input', () => {
    render(<Input label="From" date={null} dispatch={() => {}} />);
    const input: HTMLInputElement = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '07/05/2023' } });
    fireEvent.blur(input);
    expect(input.value).toBe('07/05/2023');
  });

  it('should not save date on invalid value', () => {
    render(<Input label="From" date={null} dispatch={() => {}} />);
    const input: HTMLInputElement = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '01/01/1900' } });
    fireEvent.blur(input);
    expect(input.value).toBe('');
  });
});
