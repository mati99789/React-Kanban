import React, { useEffect, useState } from 'react';
import useStorage from './../helpers/useStorage';
import { v4 as uuid } from 'uuid';
import { columnList } from './../kanbanData';
import { ContextColumn, ContextTask, MoveTask } from '../context/context';

import './App.css';
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

  const checkColumnLimit = (idColumn) => {
    const columns = getItem('columns');
    for (let i = 0; i < columns.length; i++) {
      if (columns[i].id === idColumn) {
        if (columns[i].id <= columns.length && columns[i].id > 0) {
          return true;
        }
      }
    }
  };

  const handleForwardButton = (idColumn, id) => {
    const copyTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, idColumn: task.idColumn + 1 };
      }
      return task;
    });

    setTask(copyTasks);
  };

  const handleBackwardButton = (idColumn, id) => {
    const copyTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, idColumn: task.idColumn - 1 };
      }
      return task;
    });

    setTask(copyTasks);
  };

  const moveTask = (e, id, idColumn) => {
    if (e.target.name === 'forward' && checkColumnLimit(idColumn + 1)) {
      handleForwardButton(idColumn, id);
    } else if (e.target.name === 'backward' && checkColumnLimit(idColumn - 1)) {
      handleBackwardButton(idColumn, id);
    }
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
