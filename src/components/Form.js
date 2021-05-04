import React from 'react';
import { Wrapper } from './Form.style';

const Form = () => {
  return (
    <Wrapper>
      <form>
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
