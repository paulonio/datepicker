import styled from 'styled-components';

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

export const WeekDay = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => (selected ? 'red' : 'black')};
  width: 32px;
  height: 32px;
`;
