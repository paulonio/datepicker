import styled, { css } from 'styled-components';
import type { Status } from '@/types/types';

interface WeekDayProps {
  status: Status;
  currentCalendar: 'From' | 'To' | 'Date';
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
  showWeekend: boolean;
}

export const Week = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #333333;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
`;

export const WeekDay = styled.button<WeekDayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32.85px;
  height: 32px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  color: ${({ isCurrentMonth }) => !isCurrentMonth && '#aaaaaa'};
  transition: background-color 0.3s, border-radius 0.3s, color 0.3s;
  &:enabled:hover {
    background-color: #f1f1f1;
    border-radius: 8px;
    color: #333333;
  }
  ${(props) => {
    switch (props.status) {
      case 'selectedDate':
        if (props.currentCalendar === 'Date') {
          return css`
            background-color: #2f80ed;
            color: #ffffff;
            border-radius: 8px 8px 8px 8px;
          `;
        }
        return css``;
      case 'selectedFrom':
        if (props.currentCalendar !== 'Date') {
          return css`
            background-color: rgba(47, 128, 237, 0.6);
            color: #ffffff;
            border-radius: 8px 0px 0px 8px;
          `;
        }
        return css``;
      case 'selectedTo':
        if (props.currentCalendar !== 'Date') {
          return css`
            background-color: #2f80ed;
            color: #ffffff;
            border-radius: 0px 8px 8px 0px;
          `;
        }
        return css``;
      case 'inRange':
        if (props.currentCalendar !== 'Date') {
          return css`
            background-color: rgba(47, 128, 237, 0.1);
            color: #2f80ed;
          `;
        }
        return css``;
      default:
        return css``;
    }
  }}
  color: ${({ isWeekend }) => isWeekend && '#d00000'};
  color: ${({ isToday }) => isToday && '#f48c06'};
  &:disabled {
    cursor: default;
  }
  opacity: ${({ showWeekend }) => showWeekend && '0'};
  pointer-events: ${({ showWeekend }) => showWeekend && 'none'};
`;
