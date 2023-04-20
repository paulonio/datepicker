import { MouseEventHandler } from 'react';

export interface HelloProps {
  name: string;
  onClick: MouseEventHandler<HTMLDivElement>
}
