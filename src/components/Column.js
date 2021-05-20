import React, { useContext } from 'react';
import { ContextTask } from '../context/context';
import Task from './Task';

import { Wrapper } from './Column.styles';

const Column = ({ name, id, columndId }) => {
  const tasks = useContext(ContextTask);

  const filteredTask = tasks.filter((task) => task.idColumn === columndId);

  const addedTask = filteredTask.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        name={task.taskName}
        userName={task.user}
        toDo={task.toDo}
        idColumn={task.idColumn}
      />
    );
  });

  return (
    <Wrapper key={id}>
      <header>
        <h2>{name}</h2>
      </header>
      <div>
        <div>{addedTask}</div>
      </div>
    </Wrapper>
  );
};

export default Column;
