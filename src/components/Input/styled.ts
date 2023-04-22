import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
`;

export const Label = styled.label`
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  color: #333333;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarIcon = styled.img.attrs({ src: './assets/icons/Calendar.svg' })`
  margin-right: -40px;
  z-index: 1000;
  width: 16px;
  height: 16px;
`;

export const InputIcon = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    margin: auto 0;
    width: 16px;
    height: 16px;
    background: url('./assets/icons/Calendar.svg') no-repeat;
    background-size: cover;
  }
`;

export const Field = styled.input.attrs({ type: 'text', placeholder: 'Choose Date' })`
  width: 100%;
  margin-top: 8px;
  padding: 15px 11px 15px 39px;
  /* padding-left: 20px; */
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  background-color: #ffffff;
  color: #333333;
  border: solid 1px #dddddd;
  border-radius: 8px;
  user-select: none;
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;
