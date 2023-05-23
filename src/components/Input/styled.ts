import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
`;

export const Label = styled.div`
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  color: #333333;
`;

export const FieldWrapper = styled.label`
  position: relative;
  margin-bottom: 8px;
  display: block;
  border: solid 1px #dddddd;
  border-radius: 8px;
`;

export const LeftIconWrapper = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 13px;
  left: 15px;
  cursor: pointer;
`;

export const RightIconWrapper = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 14px;
  right: 15px;
  cursor: pointer;
`;

export const Field = styled.input`
  width: calc(100% - 78px);
  border: none;
  border-radius: 8px;
  padding: 11px 39px 11px 39px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  background-color: #ffffff;
  color: #333333;
  &:focus {
    outline: none;
  }
`;
