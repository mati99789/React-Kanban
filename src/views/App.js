import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import useStorage from './../helpers/useStorage';
import { columnList } from './../kanbanData';
import { ContextColumn } from '../context/context';

import Board from '../components/Board';
import Form from '../components/Form';

function App() {
  const [task, setTask] = useState([]);
  const [getItem, setItem] = useStorage();

  useEffect(() => {
    setItem(columnList, 'columns');
  });

  return (
    <ContextColumn.Provider value={getItem('columns')}>
      <Board />
      <Form />
    </ContextColumn.Provider>
  );
}

export default App;
