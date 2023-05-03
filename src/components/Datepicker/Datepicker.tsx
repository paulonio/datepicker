import React, { FC, useState } from 'react';
import { DatepickerWrapper } from './styled';
import Global from '../../styles/Global';
import Input from '../Input/Input';
import Calendar from '../Calendar/Calendar';
import { Mode } from '../../utils/utils';

interface DatepickerProps {
  from: Date;
  to: Date;
  start: Mode;
}

const Datepicker: FC<DatepickerProps> = ({ from, to, start }) => {
  const [dateFrom, setDateFrom] = useState<Date | null>(from);
  const [dateTo, setDateTo] = useState<Date | null>(to);
  const [minDate] = useState<Date>(new Date(2023, 3, 2));
  const [maxDate] = useState<Date>(new Date(2023, 4, 25));
  const [currentCalendar, setCurrentCalendar] = useState<'From' | 'To'>('From');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  return (
    <>
      <Global />
      <DatepickerWrapper>
        <Input
          label="From"
          date={dateFrom}
          onDateChange={setDateFrom}
          setCurrentCalendar={setCurrentCalendar}
          toggleCalendar={setShowCalendar}
        />
        <Input
          label="To"
          date={dateTo}
          onDateChange={setDateTo}
          setCurrentCalendar={setCurrentCalendar}
          toggleCalendar={setShowCalendar}
        />
        {showCalendar && (
          <Calendar
            fromTo={currentCalendar}
            mode={start}
            dateFrom={dateFrom}
            dateTo={dateTo}
            onDateFromChange={setDateFrom}
            onDateToChange={setDateTo}
            toggleCalendar={setShowCalendar}
            minDate={minDate}
            maxDate={maxDate}
          />
        )}
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
