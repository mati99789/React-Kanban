import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import useStorage from './../helpers/useStorage';
import { columnList } from './../kanbanData';
import { ContextColumn, ContextTask, MoveTask } from '../context/context';

import Board from '../components/Board';
import Form from '../components/Form';

function App() {
  const [getItem, setItem] = useStorage();
  const [tasks, setTask] = useState(getItem('tasks') || []);

  useEffect(() => {
    setItem(columnList, 'columns');
  });

  useEffect(() => {
    setItem(tasks, 'tasks');
  }, [tasks, setItem]);

  const handleSubmit = (e, task) => {
    e.preventDefault();
    const taskToAdd = {
      ...task,
      id: uuid(),
      idColumn: 1,
    };

    setTask([...tasks, taskToAdd]);
  };

  const handleForwardButton = (task) => {
    console.log(task);
  };

  const handleBackwardButton = (task) => {
    console.log(task);
  };

  const moveTask = (e, id, idColumn) => {
    console.log(id);
  };

  return (
    <ContextColumn.Provider value={getItem('columns')}>
      <ContextTask.Provider value={tasks}>
        <MoveTask.Provider value={moveTask}>
          <Board />
        </MoveTask.Provider>
      </ContextTask.Provider>
      <Form submitHandler={(e, state) => handleSubmit(e, state)} />
    </ContextColumn.Provider>
  );
}

export default App;
