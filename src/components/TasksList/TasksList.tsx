import React, { FC } from 'react';
import { TaskElement, Title, Wrapper } from './styled';
import calendar from '@utils/ClassCalendar';
import type { Task } from '@components/Modal/Modal';

interface TasksListProps {
  tasks: Task[];
  date: Date;
}

const TasksList: FC<TasksListProps> = ({ tasks, date }) => {
  const dateString = calendar.parseDateToString(date);

  return (
    <Wrapper>
      <Title data-testid="title">Tasks - {dateString}</Title>
      {tasks.length &&
        tasks.map(({ id, title }) => (
          <TaskElement key={id} data-testid="task">
            {title}
          </TaskElement>
        ))}
    </Wrapper>
  );
};

export default TasksList;
