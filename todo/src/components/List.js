import React from 'react';

import Task from './Task';

const List = ({ state, dispatch }) => {
  return (
    <div>
      {state.map((task) => (
        <Task key={task.id} task={task} dispatch = {dispatch}/>
      ))}

      <button>Clear Completed</button>
    </div>
  );
};

export default List;
