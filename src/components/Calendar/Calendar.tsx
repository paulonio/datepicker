import React from 'react';
import {
  ClearButton,
  Month,
  MonthWrapper,
  NextIcon,
  PrevIcon,
  Week,
  WeekDay,
  WeekWrapper,
  Wrapper,
} from './styled';

const Calendar = () => {
  return (
    <Wrapper>
      <MonthWrapper>
        <PrevIcon />
        <Month>November 2022</Month>
        <NextIcon />
      </MonthWrapper>
      <WeekWrapper>
        <WeekDay>Su</WeekDay>
        <WeekDay>Mo</WeekDay>
        <WeekDay>Tu</WeekDay>
        <WeekDay>We</WeekDay>
        <WeekDay>Th</WeekDay>
        <WeekDay>Fr</WeekDay>
        <WeekDay>Sa</WeekDay>
      </WeekWrapper>
      <Week>
        <WeekDay>1</WeekDay>
        <WeekDay>2</WeekDay>
        <WeekDay>3</WeekDay>
        <WeekDay>4</WeekDay>
        <WeekDay>5</WeekDay>
        <WeekDay>6</WeekDay>
        <WeekDay>7</WeekDay>
        <WeekDay>8</WeekDay>
        <WeekDay>9</WeekDay>
        <WeekDay>10</WeekDay>
        <WeekDay>11</WeekDay>
        <WeekDay>12</WeekDay>
        <WeekDay>13</WeekDay>
        <WeekDay>14</WeekDay>
      </Week>
      <ClearButton>Clear</ClearButton>
    </Wrapper>
  );
};

export default Calendar;
