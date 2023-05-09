import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Button, Input, Title, Wrapper } from './styled';
import TasksList from '../TasksList/TasksList';

interface ModalProps {
  date: Date;
  handleCloseModal: (value: boolean) => void;
}

const getTasks = (date: Date) => {
  const tasks = JSON.parse(localStorage.getItem(`${date}`) as string);
  return tasks;
};

const Modal: FC<ModalProps> = ({ date, handleCloseModal }) => {
  const [value, setValue] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const receivedTasks = getTasks(date);
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
      localStorage.setItem(`${date}`, JSON.stringify([value]));
    } else {
      localStorage.getItem(`${date}`);
      const prevValues: Array<string> = JSON.parse(localStorage.getItem(`${date}`) as string);
      const data = [...prevValues, value];
      localStorage.setItem(`${date}`, JSON.stringify(data));
    }
    setValue('');
    handleCloseModal(false);
  };

  return (
    <Wrapper>
      <Title>Add task</Title>
      <Input value={value} onChange={handleChange} placeholder="Type task" />
      <Button onClick={handleAddTask}>Confirm</Button>
      <TasksList tasks={tasks} date={date} />
    </Wrapper>
  );
};

export default Modal;
