import styled from 'styled-components';

interface WrapperProps {
  currentCalendar: 'From' | 'To' | 'Date';
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  max-width: 252px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: ${({ currentCalendar }) =>
    currentCalendar === 'From' || currentCalendar === 'Date' ? '180px' : '260px'};
  left: 100px;
`;

export const CalendarWrapper = styled.div.attrs({
  'data-component': 'calendar',
  'data-testid': 'calendar',
})`
  width: 100%;
  padding: 10px 10px 0;
  border: solid 1px #e1e1e1;
  border-radius: 8px;
`;

export const WeekWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
`;

export const ClearButton = styled.button`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border: none;
  border-top: solid 1px #e1e1e1;
  color: #333333;
  background-color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  &:hover {
    cursor: pointer;
  }
`;
