import React, { FC } from 'react';

import type { Task } from '@components/Modal/Modal';

import { TaskElement, Title, Wrapper } from './styled';

interface TasksListProps {
  tasks: Task[];
}

const TasksList: FC<TasksListProps> = ({ tasks }) => {
  return (
    <Wrapper>
      <Title data-testid="title">Tasks</Title>
      {tasks.length > 0 &&
        tasks.map(({ id, title }) => (
          <TaskElement key={id} data-testid="task">
            {title}
          </TaskElement>
        ))}
    </Wrapper>
  );
};

export default TasksList;
