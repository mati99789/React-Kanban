import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import useStorage from './../helpers/useStorage';

const ContextForm = React.createContext({
  submitted: () => {},
});

export const ContextFormProvider = (props) => {
  const [tasks, setTask] = useState([]);
  const [getItem, setItem] = useStorage([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const { user, toDo, taskName } = e.target.elements;
    const task = {
      user: user.value,
      toDo: toDo.value,
      taskName: taskName.value,
      id: uuid(),
      idColumn: 1,
    };

    setTask([...tasks, task]);
  };

  useEffect(() => {
    setItem(tasks, 'task');
  }, [tasks, setItem]);

  return (
    <ContextForm.Provider value={{ submitted: submitHandler }}>
      {props.children}
    </ContextForm.Provider>
  );
};

export default ContextForm;
