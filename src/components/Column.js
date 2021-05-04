import React, {useContext} from 'react';
import { ContextTask } from '../context/context';
import Task from './Task';

import { Wrapper } from './Column.styles';

const Column = ({ name, id, limit }) => {
	const tasks = useContext(ContextTask);

	const addingTask = tasks.map((task) => {
		return (
			<Task id={task.id} name={task.taskName} userName={task.user} toDo={task.toDo} />
		);
	})

  return (
    <Wrapper key={id}>
      <header>
        <h2>{name}</h2>
      </header>
	    <div>
		    {addingTask}
	    </div>
    </Wrapper>
  );
};

export default Column;
