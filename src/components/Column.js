import React from 'react';
import { Wrapper } from './Column.styles';

const Column = ({ name, id, limit }) => {
  return (
    <Wrapper key={id}>
      <header>
        <h2>{name}</h2>
      </header>
    </Wrapper>
  );
};

export default Column;
