import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from '@components/Modal/Modal';

describe('Modal', () => {
  const dateMock = new Date(2023, 4, 11);
  jest.spyOn(Storage.prototype, 'setItem');
  Storage.prototype.setItem = jest.fn();

  it('should render modal component', () => {
    const { container } = render(<Modal date={dateMock} handleCloseModal={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it('should change input', () => {
    render(<Modal date={dateMock} handleCloseModal={() => {}} />);

    const input: HTMLInputElement = screen.getByTestId('input');
    expect(input).toHaveTextContent('');
    fireEvent.change(input, { target: { value: 'Learn react' } });
    expect(input.value).toBe('Learn react');
  });

  it('should set task to localStorage', () => {
    render(<Modal date={dateMock} handleCloseModal={() => {}} />);

    const input: HTMLInputElement = screen.getByTestId('input');
    const submitButton = screen.getByTestId('submit');
    fireEvent.change(input, { target: { value: 'Learn react' } });
    fireEvent.click(submitButton);
    expect(input.value).toBe('');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
