import styled from 'styled-components';

export const Month = styled.div`
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
`;

export const MonthWrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PrevIcon = styled.img.attrs({ src: './assets/icons/Prev.svg' })`
  display: block;
  width: 16px;
  height: 16px;
`;

export const NextIcon = styled.img.attrs({ src: './assets/icons/Next.svg' })`
  display: block;
  width: 16px;
  height: 16px;
`;
