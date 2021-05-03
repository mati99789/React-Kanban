import React from 'react';
import { columnList } from '../kanbanData';
import Column from '../components/Column';
import useStorage from './../helpers/useStorage';

const ContextColumn = React.createContext({
  data: () => {},
});

export const ContextColumnProvider = (props) => {
  const [getItem, setItem] = useStorage([]);
  setItem(columnList, 'column');

  const getData = () => {
    const columns = getItem('column');
    return columns.map((column) => {
      return <Column name={column.name} key={column.id} limit={column.limit} />;
    });
  };

  return (
    <ContextColumn.Provider value={{ data: getData }}>
      {props.children}
    </ContextColumn.Provider>
  );
};

export default ContextColumn;
