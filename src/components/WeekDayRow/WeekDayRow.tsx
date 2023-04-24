import React from 'react';
import { SundayStarts } from '../../constants/constants';
import { WeekDay, WeekWrapper } from '../Calendar/styled';

const WeekDayRow = () => {
  return (
    <WeekWrapper>
      {SundayStarts.map((day) => (
        <WeekDay key={day}>{day}</WeekDay>
      ))}
    </WeekWrapper>
  );
};

export default WeekDayRow;
