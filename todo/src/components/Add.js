import React, { useState } from 'react';

const Add = ({ dispatch }) => {
  const [newTask, setNewTask] = useState('');

  function handleChange(e) {
    setNewTask(e.target.value);
    console.log(newTask)
  }

  function handleSubmit(task) {
    const newItem = {
      item: task,
      id: Date.now(),
      completed: false,
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  }
  return (
    <div>
      <label>New Task </label>
      <input name="input-task" placeholder="I need to..." onChange={handleChange} type="text" value={newTask} />
      
      <button onClick={() => handleSubmit(newTask)}>Add</button>
    </div>
  );
};

export default Add;
