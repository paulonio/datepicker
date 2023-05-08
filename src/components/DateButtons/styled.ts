import styled, { css } from 'styled-components';

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

interface WeekDayProps {
  status: 'selectedFrom' | 'selectedTo' | 'inRange' | '';
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
}

export const WeekDay = styled.button<WeekDayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32.85px;
  height: 32px;
  border: none;
  border-radius: 4px;
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
      case 'selectedFrom':
        return css`
          background-color: rgba(47, 128, 237, 0.6);
          color: #ffffff;
          border-radius: 8px 0px 0px 8px;
        `;
      case 'selectedTo':
        return css`
          background-color: #2f80ed;
          color: #ffffff;
          border-radius: 0px 8px 8px 0px;
        `;
      case 'inRange':
        return css`
          background-color: rgba(47, 128, 237, 0.1);
          color: #2f80ed;
        `;
      default:
        return css``;
    }
  }}
  border: ${({ isWeekend }) => isWeekend && 'solid 1px blue'};
  color: ${({ isToday }) => isToday && 'red'};
  &:disabled {
    cursor: default;
  }
`;
