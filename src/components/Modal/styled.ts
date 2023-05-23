import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 8px;
  width: 250px;
  padding: 10px;
  border: solid 1px #e1e1e1;
  border-radius: 4px;
`;

export const Title = styled.h3`
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  max-width: 140px;
`;

export const Button = styled.button`
  max-width: 100px;
  &:hover {
    cursor: pointer;
  }
`;
