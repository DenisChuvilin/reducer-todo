import React from 'react';

import Task from './Task';

const List = ({ state, dispatch }) => {
function clearCompleted(state){
    // console.log('clear works!')
    dispatch({type: 'DELETE COMPLETED', payload: state })
}

  return (
    <div>
      {state.map((task) => (
        <Task key={task.id} task={task} dispatch = {dispatch}/>
      ))}

      <button onClick = {() => clearCompleted(state)}>Clear Completed</button>
    </div>
  );
};

export default List;
