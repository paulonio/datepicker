import styled from 'styled-components';

interface WeekDayProps {
  showWeekend: boolean;
}

export const WeekWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
`;

export const WeekDay = styled.div<WeekDayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  opacity: ${({ showWeekend }) => showWeekend && '0'};
  pointer-events: ${({ showWeekend }) => showWeekend && 'none'};
`;
