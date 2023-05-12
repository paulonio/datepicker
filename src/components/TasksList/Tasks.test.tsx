import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TasksList from '@components/TasksList/TasksList';
import type { Task } from '@components/Modal/Modal';

describe('TasksList', () => {
  const tasksData: Task[] = [
    { id: '1', title: 'Learn react' },
    { id: '2', title: 'Learn redux' },
  ];
  const emptyTasksData: Task[] = [];
  const date = new Date(2023, 4, 11);

  it('should render Tasks component', () => {
    const { container } = render(<TasksList tasks={emptyTasksData} date={date} />);

    expect(container).toMatchSnapshot();
  });

  it('should display correct title', () => {
    render(<TasksList tasks={emptyTasksData} date={date} />);

    const title = screen.getByTestId('title');
    expect(title).toHaveTextContent('Tasks - 11/05/2023');
  });

  it('should not display tasks on empty data', () => {
    render(<TasksList tasks={emptyTasksData} date={date} />);

    const task = screen.queryAllByTestId('task');
    expect(task).toHaveLength(0);
  });

  it('should display tasks on correct data', () => {
    render(<TasksList tasks={tasksData} date={date} />);

    const tasks = screen.getAllByTestId('task');
    expect(tasks).toHaveLength(2);
    expect(tasks[0]).toHaveTextContent('Learn react');
  });
});
