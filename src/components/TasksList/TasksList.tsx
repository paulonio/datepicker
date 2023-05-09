import React, { FC } from 'react';
import { Task, Title, Wrapper } from './styled';
import calendar from '../../utils/ClassCalendar';

interface TasksListProps {
  tasks: string[];
  date: Date;
}

const TasksList: FC<TasksListProps> = ({ tasks, date }) => {
  const dateString = calendar.updateInput(date);

  return (
    <Wrapper>
      <Title>Tasks - {dateString}</Title>
      {tasks.map((task) => (
        <Task>{task}</Task>
      ))}
    </Wrapper>
  );
};

export default TasksList;
