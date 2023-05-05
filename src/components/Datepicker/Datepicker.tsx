import React, { FC, useState, useRef } from 'react';
import { DatepickerWrapper } from './styled';
import Global from '../../styles/Global';
import Input from '../Input/Input';
import Calendar from '../Calendar/Calendar';
import { Mode } from '../../utils/ClassCalendar';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export type View = 'weekly' | 'monthly';

interface DatepickerProps {
  from: Date;
  to: Date;
  start: Mode;
  view: View;
}

const Datepicker: FC<DatepickerProps> = ({ from, to, start, view }) => {
  const [dateFrom, setDateFrom] = useState<Date | null>(from);
  const [dateTo, setDateTo] = useState<Date | null>(to);
  const [minDate] = useState<Date>(new Date(2021, 3, 2));
  const [maxDate] = useState<Date>(new Date(2025, 4, 25));
  const [currentCalendar, setCurrentCalendar] = useState<'From' | 'To'>('From');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  useOutsideClick(calendarRef, setShowCalendar);

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
            ref={calendarRef}
            fromTo={currentCalendar}
            mode={start}
            view={view}
            dateFrom={dateFrom}
            dateTo={dateTo}
            onDateFromChange={setDateFrom}
            onDateToChange={setDateTo}
            toggleCalendar={setShowCalendar}
            minDate={minDate}
            maxDate={maxDate}
            data-component="calendar"
          />
        )}
      </DatepickerWrapper>
    </>
  );
};

export default Datepicker;
