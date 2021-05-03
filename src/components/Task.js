import React from 'react';
import { Wrapper } from './Task.styles';

const Task = (props) => {
  return (
    <Wrapper key={props.id}>
      <h3>{props.name}</h3>
      <p>{props.toDo}</p>
      <p>{props.userName}</p>
      <button type="button">Forward</button>
      <button type="button">Backward</button>
    </Wrapper>
  );
};
export default Task;
