import React, { FC } from 'react';
import StyledButton from './styled';

export interface ButtonProps {
  children: string;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
