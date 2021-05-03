import React, { useContext } from 'react';
import { Wrapper } from './Form.style';
import ContextForm from '../context/contextForm';

const Form = () => {
  const ctx = useContext(ContextForm);
  return (
    <Wrapper>
      <form onSubmit={ctx.submitted}>
        <label htmlFor="task">
          Type task:
          <input type="text" name="taskName" required />
        </label>
        <label htmlFor="user">
          User name:
          <input type="text" name="user" required />
        </label>
        <label htmlFor="user">
          To do:
          <input type="text" name="toDo" required />
        </label>
        <input type="submit" value="submit" />
      </form>
    </Wrapper>
  );
};

export default Form;
