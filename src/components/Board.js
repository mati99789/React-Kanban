import React, { useContext } from 'react';
import Column from './Column';
import { Heading, Main, Wrapper } from './Board.styles';
import { ContextColumn } from '../context/context';

const Board = () => {
  const columnsArray = useContext(ContextColumn);
  const columns = columnsArray.map((column) => {
    return (
      <Column
        name={column.name}
        key={column.id}
        limit={column.limit}
        columndId={column.id}
      />
    );
  });
  return (
    <>
      <Wrapper>
        <Heading>
          <h1>Your Kanban Board</h1>
        </Heading>
        <Main>{columns }</Main>
      </Wrapper>
    </>
  );
};

export default Board;
