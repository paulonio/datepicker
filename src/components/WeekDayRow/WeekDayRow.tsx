import React from 'react';
import { SUNDAY_STARTS } from '../../constants/constants';
import { WeekDay, WeekWrapper } from '../Calendar/styled';

const WeekDayRow = () => {
  return (
    <WeekWrapper>
      {SUNDAY_STARTS.map((day) => (
        <WeekDay key={day}>{day}</WeekDay>
      ))}
    </WeekWrapper>
  );
};

export default WeekDayRow;
