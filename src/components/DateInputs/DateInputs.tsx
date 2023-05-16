import React, { FC } from 'react';

import { DatepickerProps } from '@components/Datepicker/Datepicker';
import Input from '@components/Input/Input';
import type { Action, Init } from '@/types/types';

interface DateInputsProps {
  state: Init;
  config: DatepickerProps;
  dispatch: (action: Action) => void;
}

const DateInputs: FC<DateInputsProps> = ({ state, config, dispatch }) => {
  const { from, to, date } = state;
  const { mode } = config;

  if (mode === 'date') {
    return <Input label="Date" date={date} config={config} dispatch={dispatch} />;
  }

  return (
    <>
      <Input label="From" date={from} config={config} dispatch={dispatch} />
      <Input label="To" date={to} config={config} dispatch={dispatch} />
    </>
  );
};

export default DateInputs;
