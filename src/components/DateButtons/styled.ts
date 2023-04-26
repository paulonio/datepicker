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
  mode: 'selectedFrom' | 'selectedTo' | 'inRange' | '';
}

export const WeekDay = styled.div<WeekDayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: background-color 0.3s;
  transition: border-radius 0.3s;
  &:hover {
    background-color: #f1f1f1;
    border-radius: 8px;
  }
  ${(props) => {
    switch (props.mode) {
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
          z-index: 1;
        `;
      case 'inRange':
        return css`
          background-color: rgba(47, 128, 237, 0.1);
          color: #2f80ed;
        `;
      default:
        return css`
          color: #333333;
        `;
    }
  }}
`;
