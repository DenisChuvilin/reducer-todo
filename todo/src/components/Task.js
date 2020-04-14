import React from 'react';

const Task = ({ task, dispatch }) => {
   // console.log(task)
  function toggleTask(id) {
    dispatch({ type: 'TASK_COMPLETED', payload: id });
  }
  return (
    <div className={`item${task.completed ? '_completed' : ''}`} onClick={() => toggleTask(task.id)}>
      <h2>{task.item}</h2>
      <span className={`${task.completed ? 'success' : 'not-done'}`}> completed</span>
    </div>
  );
};

export default Task;
