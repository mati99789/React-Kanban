import React, { useContext } from 'react';
import { Wrapper } from './Task.styles';
import { MoveTask } from './../context/context';

const Task = (props) => {
	const {name, toDo, userName, id, idColumn} = props;

  const moveTask = useContext(MoveTask);

  return (
    <Wrapper key={id}>
      <h3>{name}</h3>
      <p>{toDo}</p>
      <p>{userName}</p>
      <button type="button" onClick={(e) => moveTask(e, id, idColumn)}>
        Backward
      </button>
      <button type="button" onClick={(e) => moveTask(e, id, idColumn)}>
        Forward
      </button>
    </Wrapper>
  );
};
export default Task;
