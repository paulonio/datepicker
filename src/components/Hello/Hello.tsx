import React, { FC } from 'react';
import { HelloProps } from './Hello.types';

const Hello: FC<HelloProps> = ({ name, onClick }) => (
  <div onClick={onClick}>
    Hello
    {name}
    !
  </div>
);

export default Hello;
