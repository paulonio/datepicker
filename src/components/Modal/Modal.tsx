import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import TasksList from '@components/TasksList/TasksList';

import calendar from '@utils/ClassCalendar';

import { Button, Input, InputWrapper, Title, Wrapper } from './styled';

interface ModalProps {
  date: Date | null;
}

export interface Task {
  id: string;
  title: string;
}

const Modal: FC<ModalProps> = ({ date }) => {
  const [value, setValue] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const receivedTasks = calendar.getTasks(date);
    if (receivedTasks) {
      setTasks(receivedTasks);
    } else {
      setTasks([]);
    }
  }, [date]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleAddTask = () => {
    if (!localStorage.getItem(`${date}`)) {
      const data = [{ id: '0', title: value }];
      localStorage.setItem(`${date}`, JSON.stringify(data));
      setTasks(data);
    } else {
      const prevValues: Array<Task> = JSON.parse(localStorage.getItem(`${date}`) as string);
      const newTask: Task = { id: `${prevValues.length}`, title: value };
      const data = [...prevValues, newTask];
      localStorage.setItem(`${date}`, JSON.stringify(data));
      setTasks(data);
    }
    setValue('');
  };

  return (
    <Wrapper data-testid="modal">
      <Title>Add task</Title>
      <InputWrapper>
        <Input value={value} onChange={handleChange} placeholder="Type task" data-testid="input" />
        <Button onClick={handleAddTask} data-testid="submit">
          Confirm
        </Button>
      </InputWrapper>
      <TasksList tasks={tasks} />
    </Wrapper>
  );
};

export default Modal;
