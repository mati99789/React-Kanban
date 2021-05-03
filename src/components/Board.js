import React, { useContext } from 'react';
import Form from './Form';
import { Heading, Main, Wrapper } from './Board.styles';
import ContextColumn from '../context/contextColumn';

const Board = () => {
  const ctx = useContext(ContextColumn);
  return (
    <>
      <Wrapper>
        <Heading>
          <h1>Your Kanban Board</h1>
        </Heading>
        <Main>{ctx.data()}</Main>
        <Form />
      </Wrapper>
    </>
  );
};

export default Board;
