import React, { FC } from 'react';
import { TaskElement, Title, Wrapper } from './styled';
import calendar from '../../utils/ClassCalendar';
import type { Task } from '../Modal/Modal';

interface TasksListProps {
  tasks: Task[];
  date: Date;
}

const TasksList: FC<TasksListProps> = ({ tasks, date }) => {
  const dateString = calendar.parseDateToString(date);

  return (
    <Wrapper>
      <Title>Tasks - {dateString}</Title>
      {tasks.map(({ id, title }) => (
        <TaskElement key={id}>{title}</TaskElement>
      ))}
    </Wrapper>
  );
};

export default TasksList;
