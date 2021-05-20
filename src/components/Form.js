import React, { useReducer } from 'react';
import { Wrapper } from './Form.style';

const Form = (props) => {
  const init = {
    taskName: '',
    user: '',
    toDo: '',
  };

  const reducer = (state, { name, value }) => {
    const newState = { ...state };
    newState[name] = value;
    return newState;
  };

  const [state, dispatch] = useReducer(reducer, init);
  const { taskName, user, toDo } = state;

  return (
    <Wrapper>
      <form onSubmit={(e) => props.submitHandler(e, state)}>
        <label htmlFor="task">
          Type task:
          <input
            type="text"
            name="taskName"
            value={taskName}
            onChange={(e) => dispatch(e.target)}
            required
          />
        </label>
        <label htmlFor="user">
          User name:
          <input
            type="text"
            name="user"
            value={user}
            onChange={(e) => dispatch(e.target)}
            required
          />
        </label>
        <label htmlFor="user">
          To do:
          <input
            type="text"
            name="toDo"
            value={toDo}
            onChange={(e) => dispatch(e.target)}
            required
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </Wrapper>
  );
};

export default Form;
